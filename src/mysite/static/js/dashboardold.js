const data = [
    {
     "Site #": 1,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Flavorite",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Vegetable-Tomatoes\/Capsicum",
     "High level Waste Type": "Vegetable",
     "Moisture %": 90,
     "Volume pa MT": 650,
     "Data Source": "Provided",
     "Assumptions for estimate": "106T\/ha\/yr @ 35 ha",
     "Seasonal": "May-Aug",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "sustainability",
     "Key notes": "High heating cost increase",
     "Key Issues": "Heating costs"
    },
    {
     "Site #": 2,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Hussey & Co",
     "GIPP region": "Bass Coast",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Salad mixed leaves",
     "High level Waste Type": "Vegetable",
     "Moisture %": 90,
     "Volume pa MT": 182,
     "Data Source": "Provided",
     "Assumptions for estimate": "0.5T\/day all year",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "none",
     "Key notes": "n\/c",
     "Key Issues": "n\/c"
    },
    {
     "Site #": 3,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Bulmer Farms",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Brocolli \/ Corn\/Salads\/Spinach",
     "High level Waste Type": "Vegetable",
     "Moisture %": 90,
     "Volume pa MT": 50,
     "Data Source": "Provided",
     "Assumptions for estimate": "1T\/week packing floor",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wasted plant roots and stem",
     "Key Issues": "plant waste "
    },
    {
     "Site #": 4,
     "Industry Description": "Waste Collection Services",
     "Name": "E.Gippsland Council",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Garden Waste",
     "High level Waste Type": "Green",
     "Moisture %": 50,
     "Volume pa MT": 35,
     "Data Source": "Provided",
     "Assumptions for estimate": "landfill 40% organic",
     "Seasonal": "No",
     "Current use": "Municipal collection",
     "Value$\/MT": 400,
     "Aspirations": "reduce cost",
     "Key notes": "High community cost",
     "Key Issues": "$20M pa cost"
    },
    {
     "Site #": 4,
     "Industry Description": "Waste Collection Services",
     "Name": "E.Gippsland Council",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Food Waste",
     "High level Waste Type": "Food",
     "Moisture %": 70,
     "Volume pa MT": 5,
     "Data Source": "Provided",
     "Assumptions for estimate": "20,000 household bins",
     "Seasonal": "No",
     "Current use": "Municipal collection",
     "Value$\/MT": 400,
     "Aspirations": "reduce cost",
     "Key notes": "High community cost",
     "Key Issues": "$20M pa cost"
    },
    {
     "Site #": 5,
     "Industry Description": "Other Crop Growing",
     "Name": "Gippsland Seeds",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Stalks \/Grass\/Corn Kernels",
     "High level Waste Type": "Grain",
     "Moisture %": 10,
     "Volume pa MT": 2000,
     "Data Source": "Provided",
     "Seasonal": "March - May",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "environmental",
     "Key notes": "Fires no longer acceptable",
     "Key Issues": "fires not ok"
    },
    {
     "Site #": 6,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Schreurs & Sons",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Celery\/ Leeks-leaves ,base,butts",
     "High level Waste Type": "Vegetable",
     "Moisture %": 70,
     "Volume pa MT": 14000,
     "Data Source": "Provided",
     "Assumptions for estimate": "20T\/pday + 13T \/ ha 500ha",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "alternative option"
    },
    {
     "Site #": 6,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Schreurs & Sons",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Spinach\/ Rocket leaves",
     "High level Waste Type": "Vegetable",
     "Moisture %": 90,
     "Volume pa MT": 90,
     "Data Source": "Provided",
     "Assumptions for estimate": "500kg \/ day 8 mths",
     "Seasonal": "Oct-May",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "alternative option"
    },
    {
     "Site #": 7,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Covina",
     "GIPP region": "Wellington",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Carrots 50%\/Lettuce\/Cauli \/Broccoli",
     "High level Waste Type": "Vegetable",
     "Moisture %": 80,
     "Volume pa MT": 12000,
     "Data Source": "Provided",
     "Assumptions for estimate": "full vegetable incl roots",
     "Seasonal": "Oct - May",
     "Current use": "integrated",
     "Value$\/MT": 30,
     "Aspirations": "profit",
     "Key notes": "Could increase organic waste volume",
     "Key Issues": "could add volume"
    },
    {
     "Site #": 8,
     "Industry Description": "Seafood processing",
     "Name": "Mallacoota Abalone",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Abalone meat \/ Gut    50\/50",
     "High level Waste Type": "Seafood",
     "Moisture %": 80,
     "Volume pa MT": 200,
     "Data Source": "Provided",
     "Assumptions for estimate": "plus NSW fisheries expansion",
     "Seasonal": "May - Oct",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "add value"
    },
    {
     "Site #": 8,
     "Industry Description": "Seafood processing",
     "Name": "Mallacoota Abalone",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Mineral",
     "Waste Type (detailed)": "Abalone Shell",
     "High level Waste Type": "Seafood",
     "Moisture %": 0,
     "Volume pa MT": 200,
     "Data Source": "Provided",
     "Assumptions for estimate": "growth in industry",
     "Seasonal": "May - Oct",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "add value "
    },
    {
     "Site #": 9,
     "Industry Description": "Dairy Processing",
     "Name": "Burra Foods- Farm",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Milk",
     "High level Waste Type": "Dairy",
     "Moisture %": 100,
     "Volume pa MT": 7100,
     "Data Source": "Provided",
     "Assumptions for estimate": "2% yield loss 280M\/L\/PA plus dumped",
     "Seasonal": "Yes",
     "Current use": "dispose",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "alternative option"
    },
    {
     "Site #": 10,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "Select Produce ",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Peas",
     "High level Waste Type": "Vegetable",
     "Moisture %": 80,
     "Volume pa MT": 200,
     "Data Source": "Provided",
     "Assumptions for estimate": "99% Peas balance Leaf",
     "Seasonal": "Yes",
     "Current use": "integrated",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Integrated use only option",
     "Key Issues": "Feed own cows"
    },
    {
     "Site #": 11,
     "Industry Description": "Dairy Processing",
     "Name": "Fonterra",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Dairy Nutritional Powder",
     "High level Waste Type": "Dairy",
     "Moisture %": 0,
     "Volume pa MT": 19,
     "Data Source": "Provided",
     "Assumptions for estimate": "low volumes of waste in this plant",
     "Seasonal": "NO",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "environmental",
     "Key notes": "Low volume not much interest",
     "Key Issues": "low volume"
    },
    {
     "Site #": 12,
     "Industry Description": "Meat and Meat Product Mfg.",
     "Name": "Eastern Abattoirs ",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Paunch Grass \/ Animal Waste",
     "High level Waste Type": "Animal",
     "Moisture %": 90,
     "Volume pa MT": 1000,
     "Data Source": "Estimate",
     "Assumptions for estimate": "estimate from regional information.",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "n\/a"
    },
    {
     "Site #": 13,
     "Industry Description": "Dairy Processing",
     "Name": "Bega Cheese Ltd",
     "GIPP region": "Latrobe",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Milk spills\/ animal mortalities\/calf pads",
     "High level Waste Type": "Animal",
     "Moisture %": 90,
     "Volume pa MT": 5000,
     "Data Source": "Estimate",
     "Assumptions for estimate": "On farm waste \/ power cuts etc estimate",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit \/ enviro",
     "Key notes": "Wants new options to add value",
     "Key Issues": "on farm issues"
    },
    {
     "Site #": 14,
     "Industry Description": "Dairy Processing",
     "Name": "Maffra Cheese",
     "GIPP region": "Wellington",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Whey\/Milk\/Cheese\/ Wash water",
     "High level Waste Type": "Dairy",
     "Moisture %": 90,
     "Volume pa MT": 1840,
     "Data Source": "Provided",
     "Assumptions for estimate": "Production in process waste",
     "Seasonal": "10 mths summer",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Animal feed only option",
     "Key Issues": "current Pig Farm FOC"
    },
    {
     "Site #": 15,
     "Industry Description": "Log Sawmilling and Timber Processing",
     "Name": "Radial Timber",
     "GIPP region": "Wellington",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Sawdust \/ wood shavings\/ offcuts",
     "High level Waste Type": "Wood",
     "Moisture %": 80,
     "Volume pa MT": 10000,
     "Data Source": "Provided",
     "Assumptions for estimate": "Av. 50% waste from Milling feedstock.",
     "Seasonal": "No",
     "Current use": "sell",
     "Value$\/MT": "$10-$40",
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "compost\/paper\/fuel"
    },
    {
     "Site #": 16,
     "Industry Description": "Fruit and Vegetable Growing",
     "Name": "RedGem Potatoes",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Potato",
     "High level Waste Type": "Vegetable",
     "Moisture %": 80,
     "Volume pa MT": 2500,
     "Data Source": "Provided",
     "Assumptions for estimate": "50T\/ wk all year consistent",
     "Seasonal": "No",
     "Current use": "sell",
     "Value$\/MT": 10,
     "Aspirations": "profit",
     "Key notes": "Animal feed only option",
     "Key Issues": "goes to petfood\/truck"
    },
    {
     "Site #": 17,
     "Industry Description": "Dairy Processing",
     "Name": "Burra Foods-Processing",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "DAF waste\/ waste water \/ polymers",
     "High level Waste Type": "Dairy",
     "Moisture %": 90,
     "Volume pa MT": 386880,
     "Data Source": "Provided",
     "Assumptions for estimate": "10T \/day DAF \/ 1.2ML\/d w.water \/ 30kL\/d Whey",
     "Seasonal": "No",
     "Current use": "dispose",
     "Aspirations": "profit \/ enviro",
     "Key notes": "Animal feed only option",
     "Key Issues": "compost\/ animal feed"
    },
    {
     "Site #": 18,
     "Industry Description": "Beer Manufacturing",
     "Name": "Sailors Grave",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Spent Grain \/ Trube sludge",
     "High level Waste Type": "Grain",
     "Moisture %": 80,
     "Volume pa MT": 1100,
     "Data Source": "Provided\/Est",
     "Assumptions for estimate": "Estimate 5 regional Micro breweries",
     "Seasonal": "No",
     "Current use": "integrated",
     "Value$\/MT": 0,
     "Aspirations": "profit \/ enviro",
     "Key notes": "Integrated use only option",
     "Key Issues": "cattle feed"
    },
    {
     "Site #": 19,
     "Industry Description": "Seafood Processing",
     "Name": "Lake Entrance Fishermen",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Fish trimmings",
     "High level Waste Type": "Seafood",
     "Moisture %": 75,
     "Volume pa MT": 80,
     "Data Source": "Provided",
     "Assumptions for estimate": "subject to quota for catch",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": -150,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 20,
     "Industry Description": "Meat and Meat Product Mfg.",
     "Name": "Radford's",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Animal waste mixed\/ Paunch\/Blood",
     "High level Waste Type": "Animal",
     "Moisture %": 75,
     "Volume pa MT": 11000,
     "Data Source": "Provided",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "Mixed product"
    },
    {
     "Site #": 21,
     "Industry Description": "Paper Pulp Manufacturing",
     "Name": "OPAL",
     "GIPP region": "Latrobe",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Fish Farm Waste",
     "High level Waste Type": "Animal",
     "Moisture %": 80,
     "Volume pa MT": 6000,
     "Data Source": "Provided",
     "Assumptions for estimate": "Barrumundi project",
     "Seasonal": "No",
     "Current use": "integrated",
     "Value$\/MT": 0,
     "Aspirations": "profit\/ enviro",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 22,
     "Industry Description": "Fruit and Vegetable Processing",
     "Name": "One Harvest",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Vegetable trimmings-wide range",
     "High level Waste Type": "Vegetable",
     "Moisture %": 80,
     "Volume pa MT": 1007,
     "Data Source": "Provided",
     "Assumptions for estimate": "% waste on record plus 20% growth",
     "Seasonal": "Yes summer peak",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 23,
     "Industry Description": "Poultry",
     "Name": "c\/- Mark Coleman E.Gipp",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Chicken Litter",
     "High level Waste Type": "Animal",
     "Moisture %": 10,
     "Volume pa MT": 144411,
     "Data Source": "Estimate",
     "Assumptions for estimate": "180 Broiler sheds @ 270m3 per shed x 7.42\/yr",
     "Seasonal": "No",
     "Current use": "dispose",
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 24,
     "Industry Description": "Log Sawmilling and Timber dressing",
     "Name": "ASH",
     "GIPP region": "Wellington",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Wood chip \/ Sawdust",
     "High level Waste Type": "Wood",
     "Moisture %": 40,
     "Volume pa MT": 38000,
     "Data Source": "Provided",
     "Seasonal": "no",
     "Current use": "sell",
     "Value$\/MT": 30,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 25,
     "Industry Description": "Dairy Farming ",
     "Name": "Dept. Ag .Vic- Ellingbank",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Manure collected on farm pads",
     "High level Waste Type": "Animal",
     "Moisture %": 90,
     "Volume pa MT": 274297,
     "Data Source": "Estimated",
     "Assumptions for estimate": "18kg\/Cow\/day @ 12.5% time on pad 334k cows",
     "Seasonal": "10 mths summer",
     "Current use": "abandoned",
     "Value$\/MT": 0,
     "Aspirations": "Environmental",
     "Key notes": "Environmental solution",
     "Key Issues": "pollution \/ logistics"
    },
    {
     "Site #": 26,
     "Industry Description": "Meat and Meat Product Mfg.",
     "Name": "O'Connors",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Paunch",
     "High level Waste Type": "Animal",
     "Moisture %": 60,
     "Volume pa MT": 10400,
     "Data Source": "Provided",
     "Assumptions for estimate": "40T \/ day",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "Waste water upgrade wip"
    },
    {
     "Site #": 26,
     "Industry Description": "Meat and Meat Product Mfg.",
     "Name": "O'Connors",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Biosolid",
     "High level Waste Type": "Animal",
     "Moisture %": 90,
     "Volume pa MT": 19600,
     "Data Source": "Provided",
     "Seasonal": "No",
     "Current use": "dispose",
     "Aspirations": "profit",
     "Key notes": "Waste water upgrade "
    },
    {
     "Site #": 27,
     "Industry Description": "Dairy Processing",
     "Name": "Gippsland Water",
     "GIPP region": "Wellington",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "DAF waste",
     "High level Waste Type": "Dairy",
     "Moisture %": 95,
     "Volume pa MT": 52000,
     "Data Source": "Estimate",
     "Assumptions for estimate": "as per Ash Hall - LVA",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": 0,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 28,
     "Industry Description": "Bakery Food manufacturing",
     "Name": "Patties",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Pies ",
     "High level Waste Type": "Food",
     "Volume pa MT": 2920,
     "Data Source": "Provided",
     "Assumptions for estimate": "8T per day @ 350 days plus event waste 120T",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": -120,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "low meat content"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "FOGO Green waste",
     "High level Waste Type": "Green",
     "Moisture %": 60,
     "Volume pa MT": 70000,
     "Data Source": "Provided",
     "Assumptions for estimate": "sourced from Melbourne",
     "Seasonal": "no",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "limited capacity"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "FOGO Food waste",
     "High level Waste Type": "Green",
     "Volume pa MT": 30000,
     "Data Source": "Provided\/Est",
     "Assumptions for estimate": "sourced from Melbourne",
     "Seasonal": "No",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "limited capacity"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "Waste Biosolids",
     "High level Waste Type": "Animal",
     "Moisture %": 70,
     "Volume pa MT": 30000,
     "Data Source": "Provided",
     "Assumptions for estimate": "waste water process",
     "Seasonal": "no",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "value add above $20\/T"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Dairy Waste",
     "High level Waste Type": "Dairy",
     "Moisture %": 90,
     "Volume pa MT": 10000,
     "Data Source": "Provided",
     "Assumptions for estimate": "bad milk\/Filter waste",
     "Seasonal": "no",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "Extract more value"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Animal mortality",
     "High level Waste Type": "Animal",
     "Moisture %": 75,
     "Volume pa MT": 5000,
     "Data Source": "Provided",
     "Seasonal": "no",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "additional details tbc"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Sawdust ",
     "High level Waste Type": "Wood",
     "Moisture %": 80,
     "Volume pa MT": 2000,
     "Data Source": "Provided",
     "Seasonal": "no",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 29,
     "Industry Description": "Waste Collection Services",
     "Name": "Gippsland Regional Organics",
     "GIPP region": "Wellington",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "HORECA food waste",
     "High level Waste Type": "Food",
     "Moisture %": 70,
     "Volume pa MT": 5000,
     "Data Source": "Provided",
     "Assumptions for estimate": "commercial food waste",
     "Seasonal": "no",
     "Current use": "compost",
     "Value$\/MT": -100,
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 30,
     "Industry Description": "Waste Collection Services",
     "Name": "Regional Council Bass Coast",
     "GIPP region": "Bass Coast",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "FOGO",
     "High level Waste Type": "Green",
     "Moisture %": 60,
     "Volume pa MT": 12000,
     "Data Source": "Provided",
     "Assumptions for estimate": "Tendered for contract Sept. 2021-2030",
     "Seasonal": "no",
     "Current use": "compost",
     "Key notes": "tender process WIP"
    },
    {
     "Site #": 31,
     "Industry Description": "Waste Collection Services",
     "Name": "Regional Council Sth Gipp",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "FOGO",
     "High level Waste Type": "Green",
     "Moisture %": 60,
     "Volume pa MT": 6500,
     "Data Source": "Provided",
     "Assumptions for estimate": "Tendered for contract Sept. 2021-2030",
     "Seasonal": "No",
     "Current use": "compost",
     "Key notes": "tender process WIP"
    },
    {
     "Site #": 32,
     "Industry Description": "Waste Collection Services",
     "Name": "Regional Council Baw Baw",
     "GIPP region": "Baw Baw",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "FOGO",
     "High level Waste Type": "Green",
     "Moisture %": 60,
     "Volume pa MT": 18500,
     "Data Source": "Provided",
     "Assumptions for estimate": "Tendered for contract Sept. 2021-2030",
     "Seasonal": "no",
     "Current use": "compost",
     "Key notes": "tender process WIP"
    },
    {
     "Site #": 33,
     "Industry Description": "Waste Collection Services",
     "Name": "Regional Council LaTrobe",
     "GIPP region": "Latrobe",
     "Waste Profile": "Carbohydrates",
     "Waste Type (detailed)": "FOGO",
     "High level Waste Type": "Green",
     "Moisture %": 60,
     "Volume pa MT": 25000,
     "Data Source": "Provided",
     "Assumptions for estimate": "Tendered for contract Sept. 2021-2030",
     "Seasonal": "no",
     "Current use": "compost",
     "Key notes": "tender process WIP"
    },
    {
     "Site #": 34,
     "Industry Description": "Paper Pulp Manufacturing",
     "Name": "OPAL",
     "GIPP region": "Latrobe",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "ESR Cake ",
     "High level Waste Type": "Wood",
     "Moisture %": 50,
     "Volume pa MT": 110000,
     "Data Source": "Provided",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": "Confidential",
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "composted"
    },
    {
     "Site #": 34,
     "Industry Description": "Paper Pulp Manufacturing",
     "Name": "OPAL",
     "GIPP region": "Latrobe",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Eucalypt Bark",
     "High level Waste Type": "Wood",
     "Moisture %": 15,
     "Volume pa MT": 13217,
     "Data Source": "Provided",
     "Seasonal": "No",
     "Current use": "dispose",
     "Value$\/MT": "Confidential",
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "Landscape material"
    },
    {
     "Site #": 34,
     "Industry Description": "Paper Pulp Manufacturing",
     "Name": "OPAL",
     "GIPP region": "Latrobe",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Wood waste \/ sawdust",
     "High level Waste Type": "Wood",
     "Moisture %": 80,
     "Volume pa MT": 54250,
     "Data Source": "Provided",
     "Seasonal": "No",
     "Current use": "sell",
     "Value$\/MT": "Confidential",
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "compost"
    },
    {
     "Site #": 34,
     "Industry Description": "Paper Pulp Manufacturing",
     "Name": "OPAL",
     "GIPP region": "Latrobe",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "Fish Manure",
     "High level Waste Type": "Animal",
     "Moisture %": 90,
     "Volume pa MT": 6000,
     "Data Source": "Provided",
     "Assumptions for estimate": "Under R&D- Barrumundi",
     "Seasonal": "No",
     "Current use": "sell",
     "Value$\/MT": "tbc",
     "Aspirations": "profit",
     "Key notes": "Wants new options to add value",
     "Key Issues": "tbc"
    },
    {
     "Site #": 35,
     "Industry Description": "Log Sawmilling and Timber dressing",
     "Name": "Regional",
     "GIPP region": "Latrobe",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Forestry Biomass",
     "High level Waste Type": "Wood",
     "Moisture %": 80,
     "Volume pa MT": 540000,
     "Data Source": "Estimate",
     "Assumptions for estimate": "100 T per Hectare harvested",
     "Seasonal": "No",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 36,
     "Industry Description": "Log Sawmilling and Timber dressing",
     "Name": "Regional",
     "GIPP region": "East Gippsland",
     "Waste Profile": "Fibre",
     "Waste Type (detailed)": "Forestry Biomass",
     "High level Waste Type": "Wood",
     "Moisture %": 80,
     "Volume pa MT": 966000,
     "Data Source": "Estimate",
     "Assumptions for estimate": "100 T per Hectare harvested",
     "Seasonal": "No",
     "Key notes": "Wants new options to add value"
    },
    {
     "Site #": 37,
     "Industry Description": "Dairy Processing",
     "Name": "Saputo",
     "GIPP region": "South Gippsland",
     "Waste Profile": "Protein",
     "Waste Type (detailed)": "DAF waste",
     "High level Waste Type": "Dairy",
     "Moisture %": 90,
     "Volume pa MT": 49012,
     "Data Source": "Estimate",
     "Assumptions for estimate": "@2% total production ",
     "Key notes": "Wants new options to add value"
    }
   ];

document.addEventListener('DOMContentLoaded', (event) => {
    populateDropdown();
    updateSummaryMetrics();
    updateDashboard(); // Update the dashboard initially with all data
});

function populateDropdown() {
    const dropdown = document.getElementById('region-dropdown');
    const regions = [...new Set(data.map(item => item['GIPP region']))];

    // Add an option for 'All Regions'
    const allRegionsOption = document.createElement('option');
    allRegionsOption.value = ''; // Set value to empty string to represent all regions
    allRegionsOption.textContent = 'All Regions';
    dropdown.appendChild(allRegionsOption);

    // Add options for each individual region
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        dropdown.appendChild(option);
    });

    // Add event listener to update dashboard on dropdown change
    dropdown.addEventListener('change', updateDashboard);
}


function updateSummaryMetrics() {
    // Update total sites
    document.getElementById('total-sites').textContent = Math.max(...data.map(item => item['Site #']));

    // Update total volume
    document.getElementById('total-volume').textContent = data.reduce((acc, curr) => acc + curr['Volume pa MT'], 0);

    // Calculate and update average moisture
    const totalMoisture = data.reduce((acc, curr) => acc + (curr['Moisture %'] || 0), 0);
    const averageMoisture = totalMoisture / data.length;
    document.getElementById('average-moisture').textContent = averageMoisture.toFixed(2); // Rounding to 2 decimal places
}

function updateDashboard() {
    const selectedRegion = document.getElementById('region-dropdown').value;

    // Check if 'All Regions' is selected
    const filteredData = selectedRegion === '' ? data : data.filter(item => item['GIPP region'] === selectedRegion);

    updateChart(filteredData);
    updateDonutCharts(filteredData);
    updateIndustryContributionChart(filteredData);
    updateWasteDestinationChart(filteredData);
    updateSeasonalVolumeChart(filteredData);
    updateWasteProfileChart(filteredData);
    updateStackedBarChart(filteredData);
    updateLineChart(filteredData);
    updateScatterPlot(filteredData);
    updateBubbleChart(filteredData);
    updateHistogram(filteredData);
    updateBoxPlot(filteredData);
    updateRadarChart(filteredData);
    updateSankeyDiagram(filteredData);
    updateWordCloud(filteredData);
    updateTable(filteredData);
}

function updateChart(filteredData) {
    const ctx = document.getElementById('wasteVolumeChart').getContext('2d');

    // Destroy existing chart if it exists
    if (window.myChart) {
        window.myChart.destroy();
    }

    let chartTitle;
    const selectedRegion = document.getElementById('region-dropdown').value;
    if (selectedRegion === '') {
        chartTitle = 'Waste Volume in All Regions';
    } else {
        chartTitle = `Waste Volume in ${selectedRegion}`;
    }

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: filteredData.map(item => item['Name']),
            datasets: [{
                label: 'Volume pa MT',
                data: filteredData.map(item => item['Volume pa MT']),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: chartTitle
                }
            }
        }
    });
}


function updateDonutCharts(filteredData) {
    const ctx1 = document.getElementById('donutChartTotalWaste').getContext('2d');
    const ctx2 = document.getElementById('donutChartTotalWasteExclForestry').getContext('2d');

    // Process data for both donut charts
    const totalWasteByType = {};
    const totalWasteByTypeExclForestry = {};
    filteredData.forEach(item => {
        if (!totalWasteByType[item['High level Waste Type']]) {
            totalWasteByType[item['High level Waste Type']] = 0;
        }
        totalWasteByType[item['High level Waste Type']] += item['Volume pa MT'];

        if (item['High level Waste Type'] !== 'Forestry') {
            if (!totalWasteByTypeExclForestry[item['High level Waste Type']]) {
                totalWasteByTypeExclForestry[item['High level Waste Type']] = 0;
            }
            totalWasteByTypeExclForestry[item['High level Waste Type']] += item['Volume pa MT'];
        }
    });

    // Destroy existing charts if they exist
    if (window.donutChart1) {
        window.donutChart1.destroy();
    }
    if (window.donutChart2) {
        window.donutChart2.destroy();
    }

    window.donutChart1 = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: Object.keys(totalWasteByType),
            datasets: [{
                data: Object.values(totalWasteByType),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Total Waste by Type (Including Forestry)'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.chart._metasets[0].total;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${label}: ${value} MT (${percentage}%)`;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            cutout: '70%',
            radius: '90%'
        }
    });

    window.donutChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: Object.keys(totalWasteByTypeExclForestry),
            datasets: [{
                data: Object.values(totalWasteByTypeExclForestry),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Total Waste by Type (Excluding Forestry)'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.chart._metasets[0].total;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${label}: ${value} MT (${percentage}%)`;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            cutout: '70%',
            radius: '90%'
        }
    });
}

function updateIndustryContributionChart(filteredData) {
    const canvas = document.getElementById('industryContributionChart');
    if (!canvas) {
        console.error('Canvas element with ID "industryContributionChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the industry contribution chart.');
        return;
    }

    const industryContribution = {};
    filteredData.forEach(item => {
        if (!industryContribution[item['Industry Description']]) {
            industryContribution[item['Industry Description']] = 0;
        }
        industryContribution[item['Industry Description']] += item['Volume pa MT'];
    });

    const labels = Object.keys(industryContribution);
    const data = Object.values(industryContribution);

    const chartConfig = {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Proportional Mix of Major Industry Contributors to Total Volume'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.chart._metasets[0].total;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${label}: ${value} MT (${percentage}%)`;
                        }
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            cutout: '70%',
            radius: '90%'
        }
    };

    // Check if industryContributionChart already exists
    if (window.industryContributionChart instanceof Chart) {
        window.industryContributionChart.data.labels = chartConfig.data.labels;
        window.industryContributionChart.data.datasets[0].data = chartConfig.data.datasets[0].data;
        window.industryContributionChart.update();
    } else {
        window.industryContributionChart = new Chart(ctx, chartConfig);
    }
}

function updateWasteDestinationChart(filteredData) {
    const canvas = document.getElementById('wasteDestinationChart');
    if (!canvas) {
        console.error('Canvas element with ID "wasteDestinationChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the waste destination chart.');
        return;
    }

    const wasteDestination = {};
    filteredData.forEach(item => {
        if (!wasteDestination[item['Current use']]) {
            wasteDestination[item['Current use']] = 0;
        }
        wasteDestination[item['Current use']] += item['Volume pa MT'];
    });

    const labels = Object.keys(wasteDestination);
    const data = Object.values(wasteDestination);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Volume pa MT',
                data: data,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Volume Breakdown of Waste Destination'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Check if wasteDestinationChart already exists
    if (window.wasteDestinationChart instanceof Chart) {
        window.wasteDestinationChart.data.labels = chartConfig.data.labels;
        window.wasteDestinationChart.data.datasets[0].data = chartConfig.data.datasets[0].data;
        window.wasteDestinationChart.update();
    } else {
        window.wasteDestinationChart = new Chart(ctx, chartConfig);
    }
}

function updateSeasonalVolumeChart(filteredData) {
    const canvas = document.getElementById('seasonalVolumeChart');
    if (!canvas) {
        console.error('Canvas element with ID "seasonalVolumeChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the seasonal volume chart.');
        return;
    }

    const seasonalVolume = {};
    filteredData.forEach(item => {
        if (!seasonalVolume[item['Seasonal']]) {
            seasonalVolume[item['Seasonal']] = 0;
        }
        seasonalVolume[item['Seasonal']] += item['Volume pa MT'];
    });

    const labels = Object.keys(seasonalVolume);
    const data = Object.values(seasonalVolume);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Volume pa MT',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Seasonal Volumes of Materials'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Check if seasonalVolumeChart already exists
    if (window.seasonalVolumeChart instanceof Chart) {
        window.seasonalVolumeChart.data.labels = chartConfig.data.labels;
        window.seasonalVolumeChart.data.datasets[0].data = chartConfig.data.datasets[0].data;
        window.seasonalVolumeChart.update();
    } else {
        window.seasonalVolumeChart = new Chart(ctx, chartConfig);
    }
}

function updateWasteProfileChart(filteredData) {
    const canvas = document.getElementById('wasteProfileChart');
    if (!canvas) {
        console.error('Canvas element with ID "wasteProfileChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the waste profile chart.');
        return;
    }

    const wasteProfile = {};
    filteredData.forEach(item => {
        if (!wasteProfile[item['Waste Profile']]) {
            wasteProfile[item['Waste Profile']] = 0;
        }
        wasteProfile[item['Waste Profile']] += item['Volume pa MT'];
    });

    const labels = Object.keys(wasteProfile);
    const data = Object.values(wasteProfile);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Volume pa MT',
                data: data,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Waste Profile by Volume'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Check if wasteProfileChart already exists
    if (window.wasteProfileChart instanceof Chart) {
        window.wasteProfileChart.data.labels = chartConfig.data.labels;
        window.wasteProfileChart.data.datasets[0].data = chartConfig.data.datasets[0].data;
        window.wasteProfileChart.update();
    } else {
        window.wasteProfileChart = new Chart(ctx, chartConfig);
    }
}

function updateStackedBarChart(filteredData) {
    const canvas = document.getElementById('stackedBarChart');
    if (!canvas) {
        console.error('Canvas element with ID "stackedBarChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the stacked bar chart.');
        return;
    }

    const sites = [...new Set(filteredData.map(item => item['Site #']))];
    const wasteTypes = [...new Set(filteredData.map(item => item['High level Waste Type']))];

    const datasets = wasteTypes.map(wasteType => {
        return {
            label: wasteType,
            data: sites.map(site => {
                const siteData = filteredData.filter(item => item['Site #'] === site && item['High level Waste Type'] === wasteType);
                return siteData.reduce((acc, curr) => acc + curr['Volume pa MT'], 0);
            }),
            backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`,
            borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
            borderWidth: 1
        };
    });

    if (window.stackedBarChart instanceof Chart) {
        window.stackedBarChart.data.labels = sites;
        window.stackedBarChart.data.datasets = datasets;
        window.stackedBarChart.update();
    } else {
        window.stackedBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sites,
                datasets: datasets
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Stacked Bar Chart of Waste Types by Site'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function updateLineChart(filteredData) {
    const canvas = document.getElementById('lineChart');
    if (!canvas) {
        console.error('Canvas element with ID "lineChart" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the line chart.');
        return;
    }

    const sites = [...new Set(filteredData.map(item => item['Site #']))];
    const seasons = ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'];

    const datasets = sites.map(site => {
        return {
            label: `Site ${site}`,
            data: seasons.map(season => {
                const siteData = filteredData.filter(item => item['Site #'] === site && item['Seasonal'] === season);
                return siteData.reduce((acc, curr) => acc + curr['Volume pa MT'], 0);
            }),
            fill: false,
            borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
            borderWidth: 2,
            tension: 0.1
        };
    });

    if (window.lineChart instanceof Chart) {
        window.lineChart.data.labels = seasons;
        window.lineChart.data.datasets = datasets;
        window.lineChart.update();
    } else {
        window.lineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: seasons,
                datasets: datasets
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Seasonal Variation in Waste Generation'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                },
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

function updateScatterPlot(filteredData) {
    const canvas = document.getElementById('scatterPlot');
    if (!canvas) {
        console.error('Canvas element with ID "scatterPlot" not found.');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D rendering context for canvas.');
        return;
    }

    if (!filteredData || filteredData.length === 0) {
        console.warn('No data available for the scatter plot.');
        return;
    }

    const scatterData = filteredData.map(item => ({
        x: item['Moisture %'],
        y: item['Volume pa MT']
    }));

    if (window.scatterPlot instanceof Chart) {
        window.scatterPlot.data.datasets[0].data = scatterData;
        window.scatterPlot.update();
    } else {
        window.scatterPlot = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Moisture % vs Waste Volume',
                    data: scatterData,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Scatter Plot of Moisture % vs Waste Volume'
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const label = context.dataset.label || '';
                                const value = context.raw || {};
                                return `${label}: Moisture % = ${value.x}, Volume = ${value.y} MT`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Moisture %'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Volume pa MT'
                        }
                    }
                }
            }
        });
    }
}

