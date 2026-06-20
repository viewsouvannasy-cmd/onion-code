import { useParams } from "react-router";
import { useEffect } from "react";

export function SelectSectionPage() {
  const { sectionName } = useParams();

  useEffect(() => {
    document.title = `Onion - ${sectionName}`;
  }, [sectionName]);

  return <></>;
}
