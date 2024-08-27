import { Device } from "@/editor/state/editor/typings";

interface DeviceItemProps extends Device {
  resetAnchor: () => void;
}

export type { DeviceItemProps };
