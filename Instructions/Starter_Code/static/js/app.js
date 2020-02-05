// 1. Use the D3 library to read in `samples.json`.

d3.json("samples.json").then(function(data){
   
    for (var i=0; i < data.samples.length; i++){
      
        var basededatos = data.samples[i];
      
        var sampleValues = basededatos["sample_values"].slice(0,10)
      
        var otuID = basededatos["otu_ids"].slice(0,10);
      
        var otuLabels = basededatos["otu_labels"].slice(0,10);
      
        var ID = basededatos["id"]
      
        console.log(data)
   }       
   
    
});

// =======================================================

// I didnt succeed in ploting what I wanted after 8 hours. - L. 