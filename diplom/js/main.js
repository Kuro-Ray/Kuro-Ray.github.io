const home = document.getElementById('home'),
      about = document.getElementById('about'),
      works = document.getElementById('works'),
      test = document.getElementById('test'),

      iconTextAbout = document.querySelector('.icon-text-about'),
      iconTextWorks = document.querySelector('.icon-text-works'),
      iconTextHome = document.querySelector('.icon-text-home'),
      iconTextTest = document.querySelector('.icon-text-test'),

      iconHome = document.getElementById('icon-home'),
      iconAbout = document.getElementById('icon-about'),
      iconWorks = document.getElementById('icon-works'),
      iconTest = document.getElementById('icon-test'),

      aboutMe = document.getElementById('about-me'),
      name = document.querySelector('.name'),

      curs = document.querySelector('.cursor');


home.addEventListener('mouseover', () => {
    iconTextHome.classList.add('active-text-icon');
    iconHome.style.opacity = '0';
});

home.addEventListener('mouseout', () => {
    iconTextHome.classList.remove('active-text-icon');
    iconHome.style.opacity = '1';
});

about.addEventListener('mouseover', () => {
    iconTextAbout.classList.add('active-text-icon');
    iconAbout.style.opacity = '0';
});

about.addEventListener('mouseout', () => {
    iconTextAbout.classList.remove('active-text-icon');
    iconAbout.style.opacity = '1';
});

works.addEventListener('mouseover', () => {
    iconTextWorks.classList.add('active-text-icon');
    iconWorks.style.opacity = '0';
});

works.addEventListener('mouseout', () => {
    iconTextWorks.classList.remove('active-text-icon');
    iconWorks.style.opacity = '1';
});

test.addEventListener('mouseover', () => {
    iconTextTest.classList.add('active-text-icon');
    iconTest.style.opacity = '0';
});

test.addEventListener('mouseout', () => {
    iconTextTest.classList.remove('active-text-icon');
    iconTest.style.opacity = '1';
});


aboutMe.addEventListener('mouseover', (event) => {
    const target = event.target;
    
    if (target === aboutMe || target === name) {
        return
    } else {
        target.style.transition = '.22s';
        target.style.color = '#08fdd8';
        target.style.display = 'inline-flex';
        target.style.animation = 'blast 0.55s 1';
    }
});

aboutMe.addEventListener('mouseout', (event) => {
    const target = event.target;

    if (target === aboutMe || target === name) {
        return
    } else {
        target.style.color = '';
        target.style.display = ''
        target.style.animation = '';
    }
});
