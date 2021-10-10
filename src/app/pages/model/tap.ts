export interface Tap {
  id: number;
  overviewTap: {
    title: string;
    item: [
      {
        educate: {
          title: string
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
        },
        wish: {
          title: string
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
        },
      }
    ]
  };
  skillTap: {
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
  routeTap: {
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
  projectTap: {
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
