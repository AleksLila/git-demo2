var skillsData = {
    labels: ["HTML", "CSS", "JS", "Java", "C#"],
    datasets: [{
        label: "",
        data: [8, 7, 7, 6, 5], 
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};
   
var skillsOptions = {
    scales: {
        y: {
            beginAtZero: true,
            max: 10
        },
        x: {
            ticks: {
                font: {
                    size: 14, // Установите размер шрифта
                    weight: 'bold' ,// Установите жирный стиль шрифта
                    color: 'green'
                }
            }
        }
    }
};
  
var ctx = document.getElementById('skillsChart').getContext('2d');
   
var myChart = new Chart(ctx, {
    type: 'bar', 
    data: skillsData,
    options: skillsOptions
});
