export function minutesToTime(minutes){
  var hours = Math.floor(minutes / 60);
  var mins = minutes % 60;
  return (hours < 10 ? '0' + hours : hours) + ':' + (mins < 10 ? '0' + mins : mins);
}

export function twentyFourHourToMinutes(time){
  var parts = time.split(':');
  var hours = parseInt(parts[0], 10);
  var minutes = parseInt(parts[1], 10);
  return (hours * 60) + minutes;
}

export function isDateAvailable(time, start_time, end_time){
  return(
    (time >= twentyFourHourToMinutes(start_time)) && 
    (time < twentyFourHourToMinutes(end_time))
  );
}

export function convertDate(date,format){
  if(format == 'aa-mm-dd'){
    date = date.split('/');
    return date[2] + "-" + date[1] + "-" + date[0];
  } else {
    date = date.split('-');
    return date[2] + "/" + date[1] + "/" + date[0];
  }
}

export function dateObjectToString(date){
  let day = date.getDate();
  day = day < 10 ? '0' + day : day;

  let month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  let year = date.getFullYear();
  year = year < 10 ? '0' + year : year;

  return `${day}/${month}/${year}`;
}