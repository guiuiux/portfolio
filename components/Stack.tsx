interface StackProps {
    selectedStack: string[]; // Array of technology names to display
  }
  
  export default function Stack({ selectedStack }: StackProps) {
    // Full array of stack items with names and URLs
    const stackItems = [
      { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "React", url: "https://reactjs.org/" },
      { name: "Next.js", url: "https://nextjs.org/" },
      { name: "Figma", url: "https://www.figma.com/" },
      { name: "Adobe CC", url: "https://www.adobe.com/creativecloud" },
      { name: "Lottie", url: "https://airbnb.io/lottie/" },
      { name: "ProtoPie", url: "https://www.protopie.io/" },
      { name: "GitHub", url: "https://github.com/" },
      { name: "VS Code", url: "https://code.visualstudio.com/" },
      { name: "Sass", url: "https://sass-lang.com/" },
      { name: "Notion", url: "https://www.notion.so/" },
      { name: "ChatGPT", url: "https://openai.com/chatgpt" },
      { name: "Blender", url: "https://www.blender.org/" },
      { name: "Cinema 4D", url: "https://www.maxon.net/en/cinema-4d" },
    ];
  
    // Filter stack items based on the selectedStack prop
    const filteredStackItems = stackItems.filter(item =>
      selectedStack.includes(item.name)
    );
  
    return (
      <div className="flex flex-wrap gap-2">
        {filteredStackItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:underline hover:text-zinc-50 transition-colors duration-300"
          >
            {item.name}
          </a>
          
        ))}
      </div>
    );
  }
  