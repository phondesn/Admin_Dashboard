const polarArea = document.getElementById('traffic').getContext('2d');

new Chart
(
    polarArea, 
    {
        type: 'polarArea',
        data: 
        {
            labels: ['Facebook', 'LinkedIn', 'Twitter', 'Youtube', 'Instagram', 'Amazon'],
            datasets: [{
            label: 'Traffic Source',
            data: [35, 49, 44, 37, 40, 34],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
                'rgba(255,159,64,1)',
            ],
            borderWidth: 1
            }]
        },
        options: 
        {
            responsive:true, 
        }
    }
);


const Bar = document.getElementById('earnings').getContext('2d');

new Chart
(
    Bar,
    {
        type:'bar',
        data:
        {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Earnings (in Thousands)',  
                data: [153.6, 87.4, 136.5, 144.5, 97.6, 133.6, 142.5, 162.4, 86.6, 142.9, 99.4, 81.4],
                backgroundColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                    'rgba(255,159,64,1)',
                    'rgba(255,99,132,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                    'rgba(255,159,64,1)',
                ],
                borderWidth: 1
                }]
        },
        options :
        {
            responsive:true,
        }
    }

);


