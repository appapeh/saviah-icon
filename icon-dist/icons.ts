export enum Icons {
  Appapeh = "appapeh",
  Download = "download",
  Face = "face",
  Fence = "fence",
  Kanban = "kanban",
  Worker = "worker",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Appapeh]: "61697",
  [Icons.Download]: "61698",
  [Icons.Face]: "61699",
  [Icons.Fence]: "61700",
  [Icons.Kanban]: "61701",
  [Icons.Worker]: "61702",
};

export type IconsId =
  | "appapeh"
  | "download"
  | "face"
  | "fence"
  | "kanban"
  | "worker";
