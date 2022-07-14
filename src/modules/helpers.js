import { DateTime } from "luxon";
import { icons } from "../db/icons";

const initialDate = { years: 1990, months: 5, days: 5, hours: 13, };

export const nano = "nn-";

export const getID = (client, date) => {
  client = client.replace(/[\s./]/g, "").toLowerCase();
  date = date.replace(/\//g, "");
  return `${client}_${date}`;
}

export const getNewID = (client, date) => {
  client = client.replace(/[\s./]/g, "").toLowerCase();
  date = date.replace(/\//g, "");
  return `${date}_${client}`;
}

export const spinalCase = (label) => {
  return label
    .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
    .replace(/&/g, 'and')
    .trim()
    .replace(/[ ]{1,}/g, "-")
    .toLowerCase();
}

export const pascalCase = (label) => {
  return label
    .replace(/[!,.*+?^${(|[\\})\]:]/g, '')
    .replace(/&/g, 'and')
    .trim()
    .replace(/[ ]{1,}/g, "");
}

export const titleCase = (label) => {
  return label
    .replace(/_/g, " ")
    .replace(/(?:^\w|[A-Z]|\b\w)/g, word => {
      return word.toUpperCase();
    })
    .trim()
    .replace(/-/g, " ");
}

export const getIcon = (icon) => {
  return String.fromCharCode(hexToDec(icons[icon]));
}

export const hexToDec = (number) => {
  return parseInt(number, 16);
}

export const decToHex = (number) => {
  return (number).toString(16);
}

export const turingDate = (date) => {
  const newDate = DateTime.fromISO(date.replace(/[/]/g, "-")).minus(initialDate);
  return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}` : newDate.month} T${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`;
}

export const currentTuringDate = () => {
  const newDate = DateTime.now().minus(initialDate);
  return `J${newDate.year} M${newDate.month < 10 ? `0${newDate.month}` : newDate.month} T${newDate.day < 10 ? `0${newDate.day}` : newDate.day}`;
}

export const dateToNumber = (date) => {
  return parseInt(date.split("/").join(""));
}

export const rad = Math.PI / 180;

export const deg = 180 / Math.PI;

export const getZapp = (path) => {
  return `https://miguel-rivas.github.io/zapp/${path}`;
}

const audio = new Audio(getZapp(`audio/click.mp3`));
export const playSound = () => {
  audio.play();
}

export function createNode(obj) {
  const type = obj.type || 'div';
  const parent = obj.parent || document.body;
  const node = document.createElement(type);

  const hasText = obj.text !== undefined;
  if (hasText) {
    node.appendChild(document.createTextNode(obj.text));
  }

  const hasAttributes = obj.attributes !== '';
  if (hasAttributes) {
    for (const currentAttribute in obj.attributes) {
      const attr = document.createAttribute(obj.attributes[currentAttribute].name);
      attr.value = obj.attributes[currentAttribute].value;
      node.setAttributeNode(attr);
    }
  }

  parent.appendChild(node);
  return node;
}