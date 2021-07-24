const newDate: any = new Date();

export const useDate = (getDate: number) => {

  const post= new Date(getDate * 1000);
  const postYear= post.getFullYear();
  const postMonth= post.getMonth()+1;
  const postDay= post.getDate();
  const postHour= post.getHours();
  const postMinute= post.getMinutes();
  const postSecond= post.getSeconds();

  const now= new Date();
  const nowYear= now.getFullYear();
  const nowMonth= now.getMonth()+1;
  const nowDay= now.getDate();
  const nowHour= now.getHours();
  const nowMinute= now.getMinutes();
  const nowSecond= now.getSeconds();

  const postTime = new Date(postYear, postMonth, postDay, postHour, postMinute, postSecond, 0);
  const actualTime = new Date(nowYear, nowMonth, nowDay, nowHour, nowMinute, nowSecond, 0);
  const diference = postTime.getTime() - actualTime.getTime()

  const seconds_T1_a_T2 = diference / 1000;
  const seconds_into_dates = Math.abs(seconds_T1_a_T2);

  const date: any = new Date(Date.now() - (seconds_into_dates * 1000));
  
  const seconds = Math.floor((newDate - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return {
      dateOfCreation: (
        (Math.floor(interval) !== 1)
          ? Math.floor(interval) + " years ago"
          : Math.floor(interval) + " year ago"
      )
    };
  }

  interval = seconds / 2592000;
  if (interval > 1) {
    return {
      dateOfCreation: (
        (Math.floor(interval) !== 1)
          ? Math.floor(interval) + " months ago"
          : Math.floor(interval) + " month ago"
      )
    };
  }

  interval = seconds / 86400;
  if (interval > 1) {
    return {
      dateOfCreation: (
        (Math.floor(interval) !== 1)
          ? Math.floor(interval) + " days ago"
          : Math.floor(interval) + " day ago"
      )
    };
  }

  interval = seconds / 3600;
  if (interval > 1) {
    return {
      dateOfCreation: (
        (Math.floor(interval) !== 1)
          ? Math.floor(interval) + " hours ago"
          : Math.floor(interval) + " hour ago"
      )
    };
  }

  interval = seconds / 60;
  if (interval > 1) {
    return {
      dateOfCreation: (
        (Math.floor(interval) !== 1)
          ? Math.floor(interval) + " minutes ago"
          : Math.floor(interval) + " minute ago"
      )
    };
  }
  
  return {
    dateOfCreation: (
      (Math.floor(seconds) !== 1)
        ? Math.floor(seconds) + " seconds ago"
        : Math.floor(seconds) + " second ago"
    )
  };
}