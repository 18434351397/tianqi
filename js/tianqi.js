$(function () {
    let weather;
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
        dataType:"jsonp",
        success:function (res) {
            weather=res.data.weather;
            console.log(weather);
            render(weather);
        }
    })


    function render(obj) {
        $(".city").html(obj.city_name);
        $(".kongqi_2").html(obj.quality_level);
        $(".tem1").html(obj.current_temperature+"°");
        $(".tianqi1").html(obj.current_condition);
        $(".shidu>span").html("湿度"+obj.tomorrow_aqi+"%");
        // $(".tishi").html("明天："+obj.tomorrow_condition);

        obj.hourly_forecast.forEach(function (item, index) {
            let str = "";
            str = `<li>
                <span class="list_top">${item.hour}:00</span>
                <span class="list_middle" style="background: url(img/${item.weather_icon_id}.png) no-repeat;background-size: cover;"></span>
                <span class="list_bottom">${item.temperature}°</span>
            </li>`;

            // console.log(item.hour);

            // console.log($(".timelist"));
            $(".timelist").append(str);
        })

        obj.forecast_list.forEach(function (item,index) {
            let str="";
            // let mouth=item.date;
            // let m=mouth.slice(5,7);
            // console.log(m);
            str=`<li>
                <span class="yesterday">昨天</span>
                <span class="future_data">${item.date.slice(5,7)}/${item.date.slice(8,10)}</span>
                <span class="future_tianqi" style="height: 0.4rem;">${item.condition}</span>
                <span class="future_tu" style="background: url(img/${item.weather_icon_id}.png) no-repeat;background-size: cover;"></span>
                <span class="future_maxtem">${item.high_temperature}°</span>
                <span class="future_mintem">${obj.low_temperature}°</span>
                <span class="future_tu1" style="background: url(img/${item.weather_icon_id}.png) no-repeat;background-size: cover;"></span>
                <span class="future_tianqi1" style="height: 0.4rem;">${item.condition}</span>
                <span class="cloud" >${item.wind_direction}</span>
                <span class="level" >${item.wind_level}级</span>
            </li>`;

            $(".futurelist").append(str);
        })
    }
}) 
