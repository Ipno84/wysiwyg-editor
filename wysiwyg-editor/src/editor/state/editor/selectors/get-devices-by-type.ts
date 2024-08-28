import { createCachedSelector } from "re-reselect";

import type { Device, IEditorState } from "@/editor/state/editor/typings";
import { getDevices } from "./get-devices";

const getDevicesByType = createCachedSelector(
  [getDevices, (_: IEditorState, type: Device["type"]) => type],
  (devices, type) => devices.filter((device) => device.type === type),
)((_: IEditorState, authorablePropKey: string) => authorablePropKey);

export { getDevicesByType };
