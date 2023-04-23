const garmentSelect = document.getElementById('garmentSelect');
const fabricSelect = document.getElementById('fabricSelect');
const generateButton = document.getElementById('generateButton');

// Add click event listener to generateButton
generateButton.addEventListener('click', generateSizeChart);

function generateSizeChart() {
  const garment = garmentSelect.value;
  const fabric = fabricSelect.value;

  // Check if garment and fabric are selected
  if (garment && fabric) {
    // Redirect to the size chart page with selected garment and fabric as query parameters
    window.location.href = `size-chart.html?garment=${garment}&fabric=${fabric}`;
  } else {
    alert('Please select a garment and fabric.');
  }
}




document.getElementById("garmentSelect").addEventListener("change", function() {
    var garment = this.value;
    var fabricSelect = document.getElementById("fabricSelect");

    // fabricSelect.disabled = garment === "";
    

    // Clear fabric options
    fabricSelect.innerHTML = "";

    // Populate fabric options based on garment selection
    if (garment === "Men's Sadri Cotton") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("3 PLY", "3 PLY"));
        fabricSelect.add(new Option("4 PLY", "4 PLY"));
        fabricSelect.add(new Option("6 PLY", "6 PLY"));
        fabricSelect.add(new Option("8 PLY", "8 PLY"));
        // Add more fabric options for shirt
    } 
    else if (garment === "Men's Sadri Woolen") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("Merino Wool", "Merino Wool"));
        fabricSelect.add(new Option("Mix Merino Wool(Twead)", "Mix Merino Wool(Twead)"));
        // Add more fabric options for pants
    }
    else if (garment === "Men's Full Sleeve Shirt") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("ST - 80 Count", "ST - 80 Count"));
        fabricSelect.add(new Option("ST - 100 Count", "ST - 100 Count"));
        fabricSelect.add(new Option("ST - 150 Count", "ST - 150 Count"));
        fabricSelect.add(new Option("ST - 200 Count", "ST - 200 Count"));
        fabricSelect.add(new Option("DT - 60 Count", "DT - 60 Count"));
        fabricSelect.add(new Option("DT - 100 Count", "DT - 100 Count"));
        fabricSelect.add(new Option("DT - 150 Count", "DT - 150 Count"));
        fabricSelect.add(new Option("DT - 200 Count", "DT - 200 Count"));
        fabricSelect.add(new Option("NMC - ST - 45 Count", "NMC - ST - 45 Count"));
        // Add more fabric options for pants
    }
    else if (garment === "Men's Half Sleeve Shirt") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("ST - 80 Count", "ST - 80 Count"));
        fabricSelect.add(new Option("ST - 100 Count", "ST - 100 Count"));
        fabricSelect.add(new Option("ST - 150 Count", "ST - 150 Count"));
        fabricSelect.add(new Option("ST - 200 Count", "ST - 200 Count"));
        fabricSelect.add(new Option("DT - 60 Count", "DT - 60 Count"));
        fabricSelect.add(new Option("DT - 100 Count", "DT - 100 Count"));
        fabricSelect.add(new Option("DT - 150 Count", "DT - 150 Count"));
        fabricSelect.add(new Option("DT - 200 Count", "DT - 200 Count"));
        fabricSelect.add(new Option("NMC - ST - 45 Count", "NMC - ST - 45 Count"));
        
        // Add more fabric options for pants
    }
    else if (garment === "Men's Trousers") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("6 PLY", "6 PLY"));
        fabricSelect.add(new Option("8 PLY", "8 PLY"));
        // Add more fabric options for pants
    }
    else if (garment === "Men's Full Length Kurta") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("ST - 80 Count", "ST - 80 Count"));
        fabricSelect.add(new Option("ST - 100 Count", "ST - 100 Count"));
        fabricSelect.add(new Option("ST - 150 Count", "ST - 150 Count"));
        fabricSelect.add(new Option("ST - 200 Count", "ST - 200 Count"));
        fabricSelect.add(new Option("DT - 60 Count", "DT - 60 Count"));
        fabricSelect.add(new Option("DT - 100 Count", "DT - 100 Count"));
        fabricSelect.add(new Option("DT - 150 Count", "DT - 150 Count"));
        fabricSelect.add(new Option("DT - 200 Count", "DT - 200 Count"));
        fabricSelect.add(new Option("NMC - ST - 45 Count", "NMC - ST - 45 Count"));
        
        // Add more fabric options for pants
    }
    else if (garment === "Men's Short Length Kurta") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("ST - 80 Count", "ST - 80 Count"));
        fabricSelect.add(new Option("ST - 100 Count", "ST - 100 Count"));
        fabricSelect.add(new Option("ST - 150 Count", "ST - 150 Count"));
        fabricSelect.add(new Option("ST - 200 Count", "ST - 200 Count"));
        fabricSelect.add(new Option("DT - 60 Count", "DT - 60 Count"));
        fabricSelect.add(new Option("DT - 100 Count", "DT - 100 Count"));
        fabricSelect.add(new Option("DT - 150 Count", "DT - 150 Count"));
        fabricSelect.add(new Option("DT - 200 Count", "DT - 200 Count"));
        fabricSelect.add(new Option("NMC - ST - 45 Count", "NMC - ST - 45 Count"));
        
        
    }
    else if (garment === "Men's Pyjamas(Elastic and Drawstring)") {
        fabricSelect.add(new Option("Select Fabric", "Select Fabric"));
        fabricSelect.add(new Option("DT - 60 Count", "DT - 60 Count"));
        fabricSelect.add(new Option("DT - 100 Count", "DT - 100 Count"));
        fabricSelect.add(new Option("DT - 150 Count", "DT - 150 Count"));
        fabricSelect.add(new Option("NMC - ST DT - 45 Count", "NMC - ST DT - 45 Count"));
        
        
    }
    
});











