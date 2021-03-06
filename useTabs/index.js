import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTabs;
// Use case~
// export default function App() {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div className="App">
//       {content.map((section, index) => (
//         <button onClick={() => changeItem(index)}>{section.tab}</button>
//       ))}
//       <div>{currentItem.content}</div>
//     </div>
//   );
// }
// 현재 탭 index가 달라질 때마다 보여줄 contents가 달라진다.
