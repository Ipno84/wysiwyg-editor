import type { Device } from "@/editor/state/editor/typings";

interface DevicesTypeProps {
  resetAnchor: () => void;
  type: Device["type"];
}

export type { DevicesTypeProps };
