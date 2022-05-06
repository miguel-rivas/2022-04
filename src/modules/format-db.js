import { dateToNumber, turingDate, getNewID } from "../modules/helpers";
import { projectsDB as rawDB } from "../db/projects";
import { groupsDB as rawGroupsDB } from "../db/groups";

export function sortByDate(a, b) {
  return dateToNumber(b.date) - dateToNumber(a.date);
}

/* ------------------------------------- */

function uncompressProjectsDBtoJSON(db) {
  const result = {};
  db.forEach(entry => {
    const id = getNewID(entry.client, entry.date);
    result[id] = entry;
  });

  return result;
}

function uncompressGroupsDBtoJSON(groups) {
  const result = {};
  groups.forEach(group => {
    let position = { lat: '', lng: '' };

    if (group.location) {
      position = group.position;
    }

    const project = {
      "title": group.client,
      "client": group.client,
      "date": group.date,
      "turingDate": turingDate(group.date),
      "types": undefined,
      "group": group.group,
      "location": group.location,
      "links": [],
      "disabled": group.disabled,
      "tools": group.tools,
      "children": group.children,
      "image": "",
      "position": position,
      "description": group.description,
      "list": group.list,
      "image": group.image,
    };

    const id = getNewID(project.client, project.date);

    result[id + "_group"] = project;
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

export const projectsDBObj = uncompressProjectsDBtoJSON(rawDB);
export const projectsDBList = Object.values(projectsDBObj).sort(sortByDate);

export const groupsDBObj = uncompressGroupsDBtoJSON(rawGroupsDB);
export const groupsDBList = Object.values(groupsDBObj).sort(sortByDate);

export const locationsDBList = groupsDBList.filter((item) => item.location);
export const allDBObj = { ...projectsDBObj }; //, ...groupsDBObj
export const allDBListVisible = Object.values(allDBObj).filter((item) => !item.filter.includes("no-listing")).sort(sortByDate);
export const allDBListWithImages = Object.values(allDBObj).filter((item) => item.image).sort(sortByDate);
