var tableStyleSheet=document.createElement("style");tableStyleSheet.innerHTML="#container > div > div:not(.preview) > div {overflow-x: overlay;};",document.body.appendChild(tableStyleSheet);var dataframes=document.getElementsByClassName("dataframe");for(i=0;i<dataframes.length;i++)dataframes[i].parentElement.style.width="100%",dataframes[i].parentElement.style.overflowX="auto";