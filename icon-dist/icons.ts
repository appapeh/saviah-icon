export enum Icons {
  Appapeh = "appapeh",
  Download = "download",
  Face = "face",
  Fence = "fence",
  Kanban = "kanban",
  RotateClockwise = "rotate-clockwise",
  TrashBin = "trash-bin",
  Worker = "worker",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Appapeh]: "61697",
  [Icons.Download]: "61698",
  [Icons.Face]: "61699",
  [Icons.Fence]: "61700",
  [Icons.Kanban]: "61701",
  [Icons.RotateClockwise]: "61702",
  [Icons.TrashBin]: "61703",
  [Icons.Worker]: "61704",
};

export type IconsId =
  | "appapeh"
  | "download"
  | "face"
  | "fence"
  | "kanban"
  | "rotate-clockwise"
  | "trash-bin"
  | "worker";
