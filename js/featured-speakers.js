
const projects = [
    {
      id: 1,
      name: 'Yochai Benkler',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'assets/images/avatars/1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
      id: 2,
      name: 'Yochai Benkler',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'assets/images/avatars/11.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
      id: 3,
      name: 'Yochai Benkler',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'assets/images/avatars/9.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
      id: 4,
      name: 'Yochai Benkler',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'assets/images/avatars/8.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
      id: 5,
      name: 'Yochai Benkler',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'assets/images/avatars/7.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
    {
      id: 6,
      name: 'Yochai Benkler',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      img: 'assets/images/avatars/6.png',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    },
  
  ];
  
  window.onload = () => {
    projects.forEach((project, index) => {
      document.getElementById('project_container').innerHTML += `<div class="col-lg-6 col-xs-12 img-patholder">
                      <div class="img-box"><img src="${project.img}" alt="project 1"></div>
                      <div class="speaker-details">
                      <h3 class="name-speaker">${project.name}</h3>
                      <p class="title-speaker">${project.title}</h3>
                      <hr class="text-hr">
                      <p class="desc-speaker">${project.description}</h3>
                      </div>
                  </div>
        `;
    });
  };

 