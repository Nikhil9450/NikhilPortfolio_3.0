import CodeLine from "@/components/ui/CodeLine";
interface WorkspaceCodeProps {
    code: {
        declaration: string;
        keyword: string;
        variable: string;
        properties: {
        key: string;
        value: string;
        type: "string" | "boolean";
        }[];
    };
}

export default function WorkspaceCode({
  code,
}: WorkspaceCodeProps) {
  return (
    <div className="bg-black/40 px-6 py-5 font-mono text-sm whitespace-nowrap overflow-x-auto">
      <CodeLine number={1}>
        <span className="text-purple-400">
          {code.declaration}
        </span>{" "}

        <span className="text-purple-400">
          {code.keyword}
        </span>{" "}

        <span className="text-blue-300">
          {code.variable}
        </span>{" "}

        = {"{"}
      </CodeLine>

      {code.properties.map((property, index) => (
        <CodeLine
          key={property.key}
          number={index + 2}
          active={index === 0}
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
      ))}

      <CodeLine number={code.properties.length + 2}>
        {"};"}
      </CodeLine>
    </div>
  );
}