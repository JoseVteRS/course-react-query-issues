import { FC } from "react";
import LoadingIcon from "../../shared/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels";

interface Props {
  seletedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ seletedLabels, onChange }) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcon />;

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            seletedLabels.includes(label.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
