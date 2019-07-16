$(document ).ready(function() {

    $('.tabNavigation2 a').on('click', function() {
        var year = '';
        switch ($(this).attr('href')) {
            case '#year2012':
                year = [
                    ['Title', 'Количество'],
                    ['Не определено', 22.5], ['Бумажные документы', 22.3], ['Пк, сервера', 15],
                    ['Ноутбуки, смартфоны', 9.6], ['Носители резервных копий', 8.6], ['Интернет/интранет', 6.7],
                    ['Электронная почта', 6.3], ['Съемные носители', 6], ['Другие', 3],

                ];
               break;
            case '#year2011':
                year =[
                    ['Title', 'Количество'],
                    ['Не определено', 16.2], ['Бумажные документы', 19.1], ['Пк, сервера', 13.9],
                    ['Ноутбуки, смартфоны', 9.6], ['Носители резервных копий', 8.5], ['Интернет/интранет', 13.6],
                    ['Электронная почта', 6.2], ['Съемные носители', 6.2], ['Другие', 6.6],

                ];
                 break;
            case '#year2010':
                year = [
                    ['Title', 'Количество'],
                    ['Не определено', 5], ['Бумажные документы', 20], ['Пк, сервера', 25],
                    ['Ноутбуки, смартфоны', 12], ['Носители резервных копий', 2], ['Интернет/интранет', 16],
                    ['Электронная почта', 7], ['Съемные носители', 8], ['Другие', 5],

                ];
                 break;
            case '#year2009':
                year = [
                    ['Title', 'Количество'],
                    ['Не определено', 22.5], ['Бумажные документы', 22.3], ['Пк, сервера', 15],
                    ['Ноутбуки, смартфоны', 9.6], ['Носители резервных копий', 8.6], ['Интернет/интранет', 6.7],
                    ['Электронная почта', 6.3], ['Съемные носители', 6], ['Другие', 3],

                ];
                 break;
            case '#year2008':
                year = [
                    ['Title', 'Количество'],
                    ['Не определено', 22.5], ['Бумажные документы', 22.3], ['Пк, сервера', 15],
                    ['Ноутбуки, смартфоны', 9.6], ['Носители резервных копий', 8.6], ['Интернет/интранет', 6.7],
                    ['Электронная почта', 6.3], ['Съемные носители', 6], ['Другие', 3],

                ];
                 break;

            default: break;

        }
        drawChartToo(year);
    })



    function drawChartToo(year) {
        var data = google.visualization.arrayToDataTable(year);

        var options = {
            title: 'Число утечек',
            // pieSliceText: 'label',
            width: 600,
            chartArea: {width: 600},
            height: 258,
            pieHole: 0.5,
            legend: {
                alignment: "center"
            },

        };

        var chart = new google.visualization.PieChart(document.getElementById('cicle_div'));
        chart.draw(data, options);
    }

});

google.load('visualization', '1', {packages: ['corechart', 'bar']});