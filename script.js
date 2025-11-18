// wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {

    // get the title of the chart from the html
    const chartTitle = document.getElementById('chart-title').innerText;

    // determine which chart to create based on the title
    if (chartTitle.includes('Inflation Rate')) {
        createInflationChart();
    } else if (chartTitle.includes('Unemployment Rate')) {
        createUnemploymentChart();
    } else if (chartTitle.includes('GDP Growth')) {
        createGdpChart();
    } else if (chartTitle.includes('Interest Rates')) {
        createInterestRateChart();
    } else if (chartTitle.includes('Consumer Confidence')) {
        createConsumerConfidenceChart();
    } else if (chartTitle.includes('Housing Starts')) {
        createHousingStartsChart();
    } else if (chartTitle.includes('Retail Sales')) {
        createRetailSalesChart();
    } else if (chartTitle.includes('Trade Balance')) {
        createTradeBalanceChart();
    } else if (chartTitle.includes('Manufacturing PMI')) {
        createPmiChart();
    } else if (chartTitle.includes('National Debt')) {
        createNationalDebtChart();
    }

});

// get the chart element from the html
const ctx = document.getElementById('myChart').getContext('2d');

// a function to create the inflation rate chart
function createInflationChart() {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Inflation Rate in Percent',
                data: [0.1, 1.3, 2.1, 2.4, 1.8, 1.2, 4.7, 8.0, 4.1, 2.9],
                borderColor: 'red',
                fill: false
            }]
        }
    });
}

// a function to create the unemployment rate chart
function createUnemploymentChart() {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Unemployment Rate in Percent',
                data: [5.3, 4.9, 4.4, 3.9, 3.7, 8.1, 5.3, 3.6, 3.6, 4.0],
                backgroundColor: 'blue'
            }]
        }
    });
}

// a function to create the gdp growth chart
function createGdpChart() {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'GDP Growth Rate in Percent',
                data: [2.9, 1.6, 2.2, 3.0, 2.3, -2.8, 5.9, 2.1, 2.5, 2.7],
                borderColor: 'green',
                fill: false
            }]
        }
    });
}

// a function to create the interest rate chart
function createInterestRateChart() {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Federal Funds Rate in Percent',
                data: [0.25, 0.5, 1.25, 2.25, 1.75, 0.25, 0.25, 2.5, 5.25, 5.25],
                borderColor: 'purple',
                fill: false
            }]
        }
    });
}

// a function to create the consumer confidence chart
function createConsumerConfidenceChart() {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Consumer Confidence Index',
                data: [96.3, 98.2, 125.1, 128.8, 126.6, 89.0, 115.8, 102.5, 107.0, 102.0],
                backgroundColor: 'orange'
            }]
        }
    });
}

// a function to create the housing starts chart
function createHousingStartsChart() {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'New Privately Owned Housing Units Started in Thousands',
                data: [1111, 1174, 1201, 1247, 1290, 1380, 1601, 1553, 1421, 1370],
                backgroundColor: 'brown'
            }]
        }
    });
}

// a function to create the retail sales chart
function createRetailSalesChart() {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Retail Sales Growth in Percent',
                data: [2.1, 3.1, 4.4, 4.9, 3.4, -0.4, 19.3, 9.2, 2.1, 2.5],
                borderColor: 'teal',
                fill: false
            }]
        }
    });
}

// a function to create the trade balance chart
function createTradeBalanceChart() {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Balance of Trade in Billions of USD',
                data: [-500, -480, -520, -580, -577, -650, -845, -945, -773, -750],
                backgroundColor: 'navy'
            }]
        }
    });
}

// a function to create the manufacturing pmi chart
function createPmiChart() {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Manufacturing PMI (above 50 indicates expansion)',
                data: [48.2, 49.5, 51.8, 50.8, 51.3, 52.6, 54.2, 56.0, 55.4, 59.3],
                borderColor: 'gray',
                fill: false
            }]
        }
    });
}

// a function to create the national debt chart
function createNationalDebtChart() {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'National Debt in Trillions of USD',
                data: [18.1, 19.5, 20.2, 21.5, 22.7, 26.9, 28.4, 30.9, 33.1, 34.5],
                backgroundColor: 'black'
            }]
        }
    });
}
