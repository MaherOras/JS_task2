var h1array=document .getElementsByTagName("h1");
var nameArr=["Hesham","Ahmed","Mohammed", "Alaa","Magdy"];
var jRow="";
var delay=6000;

for(i=0;i<h1array.length;i++)
    {
        for(j=0;j<h1array.length;j++)
            {
                jRow=jRow+nameArr[j]+"|"
            }
        h1array[i].innerHTML=jRow;
        jRow="";
    }

    
// After a delay of 6 sec. sub-task2 will run.
setTimeout(() => {  for(i=0;i<h1array.length;i++)
    {
        h1array[i].innerHTML=nameArr[i]
    } }, delay);
