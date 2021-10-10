export interface Employee {
  id: number;
  fullname: string;
  title: string;
  room: string;
  avatar: string;
  gender: string;
  address: string;
  phone: string;
  birtday: string;
  email: string;
  skill: [
    name: string
  ];
  project: [
    title: string
  ];
  specialize: {
    title: string;
    lever: string;
    icon: string;
    item: [
      {
        id: number;
        title: string;
        time: string;
        icon: string;
        leve: string;
        skill: string;
      }
    ]
  };
  jointproject: {
    title: string;
    lever: string;
    icon: string;
    item: [
      {
        id: number;
        title: string;
        time: string;
        icon: string;
        leve: string;
        skill: string;
      }
    ]
  };
}
