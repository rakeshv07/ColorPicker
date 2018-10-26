 var colorCode=new Array();
        var matched;
        function store()
        {
            $(document).ready(function(){
            matched = $(".content div");
           

            //alert("Number of paragraphs in content div = " + matched.length);
            });

            for(var i=0;i<matched.length;i++)
            {
                var temp=document.getElementById('color'+(i+1)).innerText;
                colorCode[i]=temp;
            }
           // alert(colorCode);

        }


       function copyText(e)
        {   
          
          
            var copyCodeID="#"+e.target.id;
            copyToClipboard(copyCodeID);
           //alert(e.target.id);
            var idName=e.target.id;
           // document.getElementById('show').innerHTML=matched.length+" "+idName+ " "+e.target.innerText;
            //document.getElementById('show').innerHTML=idName;
            document.getElementById(idName).innerHTML="Copied";
            for(var i=0;i<matched.length;i++)
            {   
                var color="color"+(i+1);
                if(idName!=color)
                {
                    document.getElementById(color).innerHTML= colorCode[i];
                }
               
            }
           
            //alert(document.getElementById('color1').innerText);
           
        }
    
        function copyToClipboard(element)
        {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }
