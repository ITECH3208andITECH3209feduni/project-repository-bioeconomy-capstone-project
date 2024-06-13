(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

// Login Page
document.addEventListener('DOMContentLoaded', function () {
    const formchecker = document.querySelector('.wrapper.active-popup');

    // Check if both login and register forms exist
    if (formchecker) {
        const wrapper = document.querySelector('.wrapper');
        const loginForm = document.querySelector('.form-box.login');
        const registerForm = document.querySelector('.form-box.register');
        const forgotPasswordForm = document.querySelector('.form-box.forgot-password');

        const loginLinks = document.querySelectorAll('.login-link');
        const registerLinks = document.querySelectorAll('.register-link');
        const forgotPasswordLink = document.querySelector('.forgot-password-link');
        const closeIcon = document.querySelector('.icon-close');

        // Function to hide all forms
        function hideAllForms() {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            forgotPasswordForm.style.display = 'none';
        }

        // Function to show a specific form
        function showForm(form) {
            hideAllForms();
            form.style.display = 'block';
            wrapper.classList.add('active-popup'); // Ensure the wrapper is visible
        }

        // Event listeners for each link
        loginLinks.forEach(link => link.addEventListener('click', () => showForm(loginForm)));
        registerLinks.forEach(link => link.addEventListener('click', () => showForm(registerForm)));
        forgotPasswordLink.addEventListener('click', () => showForm(forgotPasswordForm));

        // Event listener for closing the popup
        closeIcon.addEventListener('click', () => {
            hideAllForms(); // Hide all forms when closing
            wrapper.classList.remove('active-popup'); // Hide the popup
        });

        // Ensures that clicks inside the form do not close the form
        document.querySelectorAll('.form-box').forEach(box => {
            box.addEventListener('click', event => event.stopPropagation());
        });

        // Event listener for wrong credentials
        document.addEventListener("DOMContentLoaded", function() {
            if (document.getElementById("login-error").value === "true") {
                document.querySelector(".wrapper").classList.add("active-popup");
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const formchecker = document.querySelector('.wrapper.active-popup');
    
    if (formchecker) {
        const wrapper = document.querySelector('.wrapper');
        const loginForm = document.querySelector('.form-box.login');
        const registerForm = document.querySelector('.form-box.register');
        const forgotPasswordForm = document.querySelector('.form-box.forgot-password');

        const loginLinks = document.querySelectorAll('.login-link');
        const registerLinks = document.querySelectorAll('.register-link');
        const forgotPasswordLink = document.querySelector('.forgot-password-link');
        const closeIcon = document.querySelector('.icon-close');

        // Function to hide all forms
        function hideAllForms() {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            forgotPasswordForm.style.display = 'none';
        }

        // Function to show a specific form
        function showForm(form) {
            hideAllForms();
            form.style.display = 'block';
            wrapper.classList.add('active-popup'); // Ensure the wrapper is visible
        }

        // Event listeners for each link
        loginLinks.forEach(link => link.addEventListener('click', () => showForm(loginForm)));
        registerLinks.forEach(link => link.addEventListener('click', () => showForm(registerForm)));
        forgotPasswordLink.addEventListener('click', () => showForm(forgotPasswordForm));

        // Event listener for closing the popup
        closeIcon.addEventListener('click', () => {
            hideAllForms(); // Hide all forms when closing
            wrapper.classList.remove('active-popup'); // Hide the popup
        });

        // Ensures that clicks inside the form do not close the form
        document.querySelectorAll('.form-box').forEach(box => {
            box.addEventListener('click', event => event.stopPropagation());
        });

        // Event listener for wrong credentials
        document.addEventListener("DOMContentLoaded", function() {
            if (document.getElementById("login-error").value === "true") {
                document.querySelector(".wrapper").classList.add("active-popup");
            }
        });
    }
});


$(document).ready(function() {
    // Function to handle file upload using AJAX
    function uploadFile(formData) {
        $.ajax({
            url: '/dashboard/upload/',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                // Handle success response
                console.log(response);
                showMessage('File uploaded successfully.');
            },
            error: function(xhr, status, error) {
                // Handle error response
                console.error(xhr.responseText);
                showMessage('Error uploading file: ' + xhr.responseText);
            }
        });
    }


    // Event listener for upload button click
    $('#uploadBtn').on('click', function() {
        // Create a FormData object to hold the file data
        var formData = new FormData();

        // Append the file to the FormData object
        formData.append('file', $('#fileInput')[0].files[0]);

        // Call the uploadFile function with the FormData object
        uploadFile(formData);
    });
});

function showMessage(message) {
    $('#messageContent').text(message);
    $('#messageModal').modal('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const summarySection = document.getElementById('summary');

    if (summarySection) {
        fetchDataAndUpdateDashboard();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
});

async function fetchDataAndUpdateDashboard() {
    try {
        const response = await fetch('api/waste-data/');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        populateDropdown(data);
        updateSummaryMetrics(data);
        updateDashboard(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function populateDropdown(data) {
    const dropdown = document.getElementById('region-dropdown');
    const regions = [...new Set(data.map(item => item['gipp_region']))];

    // Add an option for 'All Councils'
    const allRegionsOption = document.createElement('option');
    allRegionsOption.value = ''; // Set value to empty string to represent all councils
    allRegionsOption.textContent = 'All Councils';
    dropdown.appendChild(allRegionsOption);

    // Add options for each individual region
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        dropdown.appendChild(option);
    });

    // Add event listener to update dashboard when dropdown value changes
    dropdown.addEventListener('change', () => {
        const selectedRegion = dropdown.value;
        const filteredData = selectedRegion === '' ? data : data.filter(item => item['gipp_region'] === selectedRegion);
        updateDashboard(filteredData);
    });
}


function updateSummaryMetrics(data) {
    // Update total sites
    document.getElementById('total-sites').textContent = Math.max(...data.map(item => item['site_number']));

    // Update total volume
    document.getElementById('total-volume').textContent = data.reduce((acc, curr) => acc + curr['volume_pa_mt'], 0);

    // Calculate and update average moisture
    const totalMoisture = data.reduce((acc, curr) => acc + (curr['moisture_percentage'] || 0), 0);
    const averageMoisture = totalMoisture / data.length;
    document.getElementById('average-moisture').textContent = averageMoisture.toFixed(2); // Rounding to 2 decimal places
}

function updateDashboard(data) {
    const selectedRegion = document.getElementById('region-dropdown').value;

    // Check if 'All Councils' is selected
    const filteredData = {};

    // Iterate over the properties of the data object
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            // Check if the property matches the condition (e.g., gipp_region)
            if (data[key]['gipp_region'] === selectedRegion || selectedRegion === '') {
                // If it matches, add it to the filteredData object
                filteredData[key] = data[key];
            }
        }
    }

    updateChart(filteredData);
    updateDonutCharts(filteredData);
    updateIndustryContributionChart(filteredData);
    updateWasteDestinationChart(filteredData);
    updateSeasonalVolumeChart(filteredData);
    updateWasteProfileChart(filteredData);
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
        chartTitle = 'Byproduct Volume in All Councils';
    } else {
        chartTitle = `Byproduct Volume in ${selectedRegion}`;
    }

    // Aggregate data by 'name'
    const aggregatedData = {};
    Object.values(filteredData).forEach(item => {
        const name = item['name'];
        const volume = item['volume_pa_mt'];
        if (!aggregatedData[name]) {
            aggregatedData[name] = volume;
        } else {
            aggregatedData[name] += volume;
        }
    });

    // Extract labels and data from aggregated data
    const labels = Object.keys(aggregatedData);
    const data = Object.values(aggregatedData);

    window.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Volume pa MT',
                data: data,
                backgroundColor: 'rgba(0, 100, 0, 0.7)', // Dark green background color
                borderColor: 'rgba(0, 100, 0, 1)', // Dark green border color
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
    Object.values(filteredData).forEach(item => {
        if (!totalWasteByType[item['high_level_waste_type']]) {
            totalWasteByType[item['high_level_waste_type']] = 0;
        }
        totalWasteByType[item['high_level_waste_type']] += item['volume_pa_mt'];

        if (item['high_level_waste_type'] !== 'Wood') {
            if (!totalWasteByTypeExclForestry[item['high_level_waste_type']]) {
                totalWasteByTypeExclForestry[item['high_level_waste_type']] = 0;
            }
            totalWasteByTypeExclForestry[item['high_level_waste_type']] += item['volume_pa_mt'];
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
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 0, 255, 0.7)', 
                    'rgba(0, 255, 255, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 0, 255, 1)', 
                    'rgba(0, 255, 255, 1)',    
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
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 0, 255, 0.7)', 
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 0, 255, 1)', 
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
    Object.values(filteredData).forEach(item => {
        if (!industryContribution[item['industry_description']]) {
            industryContribution[item['industry_description']] = 0;
        }
        industryContribution[item['industry_description']] += item['volume_pa_mt'];
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
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 0, 255, 0.7)',
                    'rgba(0, 255, 255, 0.7)',
                    'rgba(255, 255, 0, 0.7)',   
                    'rgba(0, 255, 0, 0.7)',     
                    'rgba(128, 0, 0, 0.7)',     
                    'rgba(255, 192, 203, 0.7)', 
                    'rgba(0, 0, 128, 0.7)',    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 255, 0, 1)',     
                    'rgba(0, 255, 0, 1)',       
                    'rgba(128, 0, 0, 1)',       
                    'rgba(255, 192, 203, 1)',   
                    'rgba(0, 0, 128, 1)',       
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
    Object.values(filteredData).forEach(item => {
        if (!wasteDestination[item['current_use']]) {
            wasteDestination[item['current_use']] = 0;
        }
        wasteDestination[item['current_use']] += item['volume_pa_mt'];
    });

    const labels = Object.keys(wasteDestination);
    const data = Object.values(wasteDestination);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'volume_pa_mt',
                data: data,
                backgroundColor: 'rgba(0, 100, 0, 0.7)', // Dark green background color
                borderColor: 'rgba(0, 100, 0, 1)', // Dark green border color
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
    Object.values(filteredData).forEach(item => {
        if (!seasonalVolume[item['seasonal']]) {
            seasonalVolume[item['seasonal']] = 0;
        }
        seasonalVolume[item['seasonal']] += item['volume_pa_mt'];
    });

    const labels = Object.keys(seasonalVolume);
    const data = Object.values(seasonalVolume);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'volume_pa_mt',
                data: data,
                backgroundColor: 'rgba(0, 100, 0, 0.7)', // Dark green background color
                borderColor: 'rgba(0, 100, 0, 1)', // Dark green border color
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
    Object.values(filteredData).forEach(item => {
        if (!wasteProfile[item['waste_profile']]) {
            wasteProfile[item['waste_profile']] = 0;
        }
        wasteProfile[item['waste_profile']] += item['volume_pa_mt'];
    });

    const labels = Object.keys(wasteProfile);
    const data = Object.values(wasteProfile);

    const chartConfig = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'volume_pa_mt',
                data: data,
                backgroundColor: 'rgba(0, 100, 0, 0.7)', // Dark green background color
                borderColor: 'rgba(0, 100, 0, 1)', // Dark green border color
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

    const sites = Object.values(filteredData).map(item => item['site_number']);
    const wasteTypes = Object.values(filteredData).map(item => item['high_level_waste_type']);
    
    const datasets = wasteTypes.map(wasteType => {
        return {
            label: wasteType,
            data: sites.map(site => {
                const siteData = Object.values(filteredData).filter(item => item['site_number'] === site && item['high_level_waste_type'] === wasteType);
                return siteData.reduce((acc, curr) => acc + curr['volume_pa_mt'], 0);
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

// Popup Functions
function openPopup(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'flex';
    }
}

function closePopup(id) {
    var popup = document.getElementById(id);
    if (popup) {
        popup.style.display = 'none';
    }
}

function zoomIn(imageId) {
    let img = document.getElementById(imageId);
    if (img) {
        let currWidth = img.clientWidth;
        img.style.width = (currWidth + 100) + "px";
    }
}

function zoomOut(imageId) {
    let img = document.getElementById(imageId);
    if (img) {
        let currWidth = img.clientWidth;
        if (currWidth > 100) {
            img.style.width = (currWidth - 100) + "px";
        }
    }
}

function openProportionalMixPopup() {
    openPopup('proportionalMixPopup');
}

function openExcludingForestryPopup() {
    openPopup('popupExcludingForestry');
}

function openIncludingForestryPopup() {
    openPopup('popupIncludingForestry');
}

// Keydown Events for Popups
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closePopup('popupExcludingForestry');
        closePopup('popupIncludingForestry');
        closePopup('proportionalMixPopup');
    }
});

document.querySelectorAll('.popup-opener').forEach(function (element) {
    element.addEventListener('click', function () {
        var targetId = this.getAttribute('data-target');
        openPopup(targetId);
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        var activeElement = document.activeElement;
        if (activeElement.classList.contains('popup-opener')) {
            var targetId = activeElement.getAttribute('data-target');
            openPopup(targetId);
        }
    }
});





