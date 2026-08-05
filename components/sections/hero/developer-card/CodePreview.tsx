import CodeLine from "@/components/ui/CodeLine";
interface CodePreviewProps {
  code: {
    keyword: string;
    variable: string;
    properties: {
      key: string;
      value: string;
    }[];
  };
}

export default function CodePreview({
  code,
}: CodePreviewProps) {
  return (
    <div className="rounded-2xl bg-black/40 p-6 font-mono text-sm">
        <CodeLine number={1}>
            <span className="text-purple-400">
                {code.keyword}
            </span>{" "}
            <span className="text-blue-300">
                {code.variable}
            </span>{" "}
            = {"{"}
        </CodeLine>
     {
        code.properties.map((property, index) => (
            <CodeLine
            key={property.key}
            number={index + 2}
            >
            <span className="ml-4 text-cyan-300">
                {property.key}
            </span>

            <span>: </span>

            <span
                className={
                property.type === "boolean"
                    ? "text-orange-400"
                    : "text-green-400"
                }
            >
                {property.value}
            </span>

            ,
            </CodeLine>
            
        ))
        }
        <CodeLine number={code.properties.length + 2}>
            {"};"}
        </CodeLine>
    </div>
  );
}