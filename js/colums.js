$(document ).ready(function() {

    $('.tabNavigation a').on('click', function() {

        var year = '';
        switch ($(this).attr('href')) {
            case '#year2012':
                year = [
                    ['', '2012'],
                    ['Умышленные', 46],
                    ['Случайные', 38],
                    ['Не определено', 16],
                ];
               break;
            case '#year2011':
                year = [
                    ['', '2011'],
                    ['Умышленные', 42],
                    ['Случайные', 43],
                    ['Не определено', 15],
                ];
                 break;
            case '#year2010':
                year = [
                    ['', '2010'],
                    ['Умышленные', 42],
                    ['Случайные', 53],
                    ['Не определено', 5],
                ];
                 break;
            case '#year2009':
                year = [
                    ['', '2009'],
                    ['Умышленные',51],
                    ['Случайные', 44],
                    ['Не определено', 5],
                ];
                 break;
            case '#year2008':
                year = [
                    ['', '2008'],
                    ['Умышленные', 42],
                    ['Случайные', 46],
                    ['Не определено', 12],
                ];
                 break;
            case '#year2007':
                year = [
                    ['', '2007'],
                    ['Умышленные', 89],
                    ['Случайные', 11],
                    ['Не определено', 0],
                ];
                break;
            case '#year2006':
                year = [
                    ['', '2006'],
                    ['Умышленные', 71],
                    ['Случайные', 29],
                    ['Не определено', 0],
                ];break;

            default: break;

        }
        if (year) {
            drawChart(year);
        } else {
            columnChart();
        }
    })

    google.setOnLoadCallback(columnChart);

    function drawChart(year) {
        var data = google.visualization.arrayToDataTable(year);

        var options = {
            pieSliceTextStyle: {
                color: 'black'
            },
            legend: { alignment: "center"},
            height: 258,
            width: 600,
            chartArea: {width: 600}

        };
        var chart = new google.visualization.PieChart(document.getElementById('columnchart_material'));
        chart.draw(data, options);

    }
    function columnChart() {
        var data = google.visualization.arrayToDataTable([
            ['', 'Умышленные', 'Специальные', 'Не определено'],
            ['2006', 237, 96, 0],
            ['2007', 295, 38, 0],
            ['2008', 223, 242, 65],
            ['2009', 382, 325, 40],
            ['2010', 334, 420, 40],
            ['2011', 344, 336, 121],
            ['2012', 430, 352, 152],
        ]);

        var options = {
            bars: 'vertical',
          //  pieHole: 0.5,
          //  vAxis: {format: 'decimal'},
            height: 258,
            width: 600,
            colors: ['#1b9e77', '#d95f02', '#7570b3'],
			legend: 'none',
			
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));
        chart.draw(data, options);
    }

});

google.load('visualization', '1', {packages: ['corechart', 'bar']});