import { dateToNumber, turingDate, getNewID } from "@/modules/helpers";
import { projectsDB as rawDB } from "@/db/projects";
import { groupsDB as rawGroupsDB } from "@/db/groups";

export function sortByDate(a, b) {
  return dateToNumber(b.date) - dateToNumber(a.date);
}

/* ------------------------------------- */

function uncompressDBtoJSON(db) {
  const result = {};
  db.forEach(entry => {
    const id = getNewID(entry.client, entry.date);
    result[id] = entry;
  });

  return result;
}

function uncompressGroupsDBtoJSON(db) {
  const result = {};
  db.forEach(entry => {
    const id = getNewID(entry.client, entry.date);
    result[id + "_group"] = entry;
  });

  return result;
}


/* ------------------------------------- */

export function allTools() {
  let tools = {};
  let result = [];

  projectsDBList.forEach((project) => {
    if (typeof project.tools !== "undefined") {
      project.tools.forEach((tool) => {
        if (typeof tools[tool] === "undefined") {
          tools[tool] = 1;
        } else {
          tools[tool]++;
        }
      });
    }
  });

  let keys = Object.keys(tools);
  let values = Object.values(tools);

  keys.forEach((key, index) => {
    let newItem = new Object();
    newItem["skill"] = key;
    newItem["total"] = values[index];
    result.push(newItem);
  });

  return result;
}

export function allDates() {
  let dates = {};
  let result = [];

  projectsDBList.forEach((project) => {
    if (typeof project.turingDate !== "undefined") {
      let key = project.turingDate.split(" ")[0].substring(1);

      if (typeof dates[key] === "undefined") {
        dates[key] = 1;
      } else {
        dates[key]++;
      }
    }
  });

  let keys = Object.keys(dates);
  let values = Object.values(dates);

  keys.forEach((key, index) => {
    let newItem = new Object();
    newItem["date"] = key;
    newItem["total"] = values[index];
    result.push(newItem);
  });

  return result;
}

/* ------------------------------------- */

export const projectsDBObj = uncompressDBtoJSON(rawDB);
export const projectsDBList = Object.values(projectsDBObj).sort(sortByDate);

export const groupsDBObj = uncompressGroupsDBtoJSON(rawGroupsDB);
export const groupsDBList = Object.values(groupsDBObj).sort(sortByDate);

export const locationsDBList = groupsDBList.filter((item) => item.filter.includes("location"));
export const allDBObj = { ...projectsDBObj, ...groupsDBObj };
export const allDBListVisible = Object.values(allDBObj).filter((item) => !item.filter.includes("no-listing")).sort(sortByDate);
export const allDBListWithImages = Object.values(allDBObj).filter((item) => item.image).sort(sortByDate);
