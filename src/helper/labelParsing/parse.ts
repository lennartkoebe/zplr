import { CommandMap, Commands } from "@/commands";
import { CommandClass } from "@/types/CommandClass";

export function nextCommandIndex(
  zpl: string,
  caret: string,
  tilde: string
): number {
  const tildeIndex = zpl.indexOf(caret);
  const caretIndex = zpl.indexOf(tilde);
  let index = zpl.length;
  if (tildeIndex !== -1) {
    index = Math.min(index, tildeIndex);
  }
  if (caretIndex !== -1) {
    index = Math.min(index, caretIndex);
  }
  return index;
}

export function skipToCommandStart(
  zpl: string,
  caret: string,
  tilde: string
): string {
  let index = nextCommandIndex(zpl, caret, tilde);

  const remaining = zpl.slice(index);
  return remaining;
}

export function getCommandEnd(
  zpl: string,
  caret: string,
  tilde: string
): number {
  let index = nextCommandIndex(zpl.slice(1), caret, tilde);
  if (index === -1) return zpl.length;
  return index + 1;
}

export function getCommandInfo(
  zpl: string,
  caret: string,
  tilde: string
):
  | {
      name: Commands | "XA" | "XZ" | "CC";
      paramText: string;
      remaining: string;
    }
  | undefined {
  const commandNameRegex = new RegExp(`[B-Z0-9]{2}|A@|A`);
  const commandText = zpl.slice(1);
  const commandName = commandText.match(commandNameRegex)?.[0] as
    | Commands
    | "XA"
    | "XZ"
    | "CC"
    | undefined;
  if (!commandName) {
    console.warn(`INVALID command: ${commandText}`);
    return undefined;
  }
  const commandEnd = getCommandEnd(zpl, caret, tilde);
  const paramText = zpl.slice(commandName.length + 1, commandEnd);
  const remaining = zpl.slice(commandEnd);
  return {
    name: commandName,
    paramText,
    remaining,
  };
}

export function parse(zpl: string): CommandClass[][] {
  const labels: CommandClass[][] = [];
  let caretChar = "^";
  let tildeChar = "~";

  let commands: CommandClass[] = [];
  let label = zpl;

  while (label.length > 0) {
    const commandStart = skipToCommandStart(label, caretChar, tildeChar);
    if (commandStart === "") {
      break;
    }

    const commandInfo = getCommandInfo(label, caretChar, tildeChar);
    if (!commandInfo) {
      continue;
    }
    const commandName = commandInfo.name;
    const commandParamText = commandInfo.paramText;

    if (commandName === "CC") {
      caretChar = commandParamText[0] || "^";
      label = label.slice(4);
      continue;
    }
    label = commandInfo.remaining;

    if (commandName === "XA") {
      commands = [];
      continue;
    }
    if (commandName === "XZ") {
      labels.push(commands);
      commands = [];
      continue;
    }

    const commandClass = CommandMap[commandName];

    if (commandClass) {
      commands.push(new commandClass(commandParamText));
    } else {
      console.warn(`Unknown command: ^${commandName}`);
    }
  }

  if (commands.length > 0) {
    console.warn("Unfinished commands");
    labels.push(commands);
  }

  return labels;
}
