$(document ).ready(function() {

    $('.tabNavigation3 a').on('click', function() {
        var year = '';
        switch ($(this).attr('href')) {
            case '#type1':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 40],
                    ['2009', 107],
                    ['2010', 199],
                    ['2011', 111],
                    ['2012', 140],
                ];
               break;
            case '#type2':
                year =[
                    ["Год", "Число утечек" ],
                    ['2008', 28],
                    ['2009', 146],
                    ['2010', 159],
                    ['2011', 153],
                    ['2012', 208],
                ];
                 break;
            case '#type3':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 112],
                    ['2009', 134],
                    ['2010', 127],
                    ['2011', 109],
                    ['2012', 63],
                ];
                 break;
            case '#type4':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 103],
                    ['2009', 98],
                    ['2010', 95],
                    ['2011', 77],
                    ['2012', 90],
                ];
                 break;
            case '#type5':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 12],
                    ['2009', 39],
                    ['2010', 56],
                    ['2011', 50],
                    ['2012', 58]
                ];break;
            case '#type6':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 30],
                    ['2009', 34],
                    ['2010', 64],
                    ['2011', 50],
                    ['2012', 56],
                ];break;
            case '#type7':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 15],
                    ['2009', 53],
                    ['2010', 40],
                    ['2011', 53],
                    ['2012', 28],
                ];break;
            case '#type8':
                year = [
                    ["Год", "Число утечек" ],
                    ['2008', 17],
                    ['2009', 54],
                    ['2010', 16],
                    ['2011', 68],
                    ['2012', 80],
                ];

                 break;

        }
        drawBasic(year);
    })



    function drawBasic(year) {
        var data = google.visualization.arrayToDataTable(year);
        var options = {
            title: 'Число зарегистрированных утечек',
            legend: 'none',
            width: 600,
            height: 237,
            bar: {groupWidth: '40%'},
            vAxis: { gridlines: { count: 6 } },
            chartArea: {width: 550}
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('canal_div'));
        chart.draw(data, options);
    }

});

google.load('visualization', '1', {packages: ['corechart', 'bar']});