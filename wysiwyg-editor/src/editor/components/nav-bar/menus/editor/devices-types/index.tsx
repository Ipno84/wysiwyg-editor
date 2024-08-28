import { DevicesTypesProps } from "@/editor/components/nav-bar/menus/editor/devices-types/typings";
import { getDevicesTypes } from "@/editor/state/editor/selectors/get-devices-types";
import { useEditorStore } from "@/editor/state/editor";
import { DevicesType } from "@/editor/components/nav-bar/menus/editor/devices-type";

const DevicesTypes: React.FC<DevicesTypesProps> = ({ resetAnchor }) => {
  const devicesTypes = useEditorStore(getDevicesTypes);

  return devicesTypes.map((devicesType) => (
    <DevicesType
      resetAnchor={resetAnchor}
      type={devicesType}
      key={devicesType}
    />
  ));
};

export { DevicesTypes };
