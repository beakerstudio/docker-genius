import { useEffect, useState } from "react";
import results from "../styles/Result.module.css";

export default function Result({ files }) {
  const [activeTab, setActiveTab] = useState(0);

  const onActiveTab = (event, index) => {
    event.preventDefault();
    setActiveTab(index);
  };

  useEffect(() => {
    setActiveTab(0);
  }, [files.length])

  return (
    <div className={results.Result}>
      <h2 className={results.Result_title + ' ColorGradient'}>Dev Environment</h2>
      <div className={results.Result_tabBar}>
        {files.map((file, index) => (
          <button className={results.Result_tab + (activeTab === index ? ` ${results['-active']}` : '')} key={index} onClick={event => onActiveTab(event, index)}>{file.name}</button>
        ))}
      </div>
      <pre className={results.Result_field}>{files[activeTab].value}</pre>
    </div>
  );
}
