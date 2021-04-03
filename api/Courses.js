const coursesList = [
  {
    course_name: "Respoinsive Design Course On React With Hooks",
    id: 0,
    author: "Vonda Marquez",
    cost: 394,
    tags: ["react"],
    discount_from: 1009,
    course_details:
      "Minim fugiat commodo ad dolor nisi est elit sit do in non laborum aliquip ea. Quis aliqua in est sunt in in id. Non sint anim duis ut cillum ut magna qui voluptate enim.\r\n",
  },
  {
    course_name: "Respoinsive Design Course On React With JS Class",
    id: 1,
    author: "Marietta Cooley",
    cost: 307,
    tags: ["react", "Javascript"],
    discount_from: 979,
    course_details:
      "Velit aliqua deserunt est excepteur consequat. Lorem officia dolor nostrud exercitation enim cillum voluptate consectetur. Quis mollit officia incididunt culpa ut elit est pariatur aliqua consequat anim eu. Exercitation minim adipisicing id dolor ut aliqua. Amet ad officia esse officia.\r\n",
  },
  {
    course_name: "React Beginners course",
    id: 2,
    author: "Mae Chambers",
    cost: 498,
    tags: ["react"],
    discount_from: 741,
    course_details:
      "Aliquip nostrud duis qui ut enim velit pariatur excepteur nisi labore esse eu. Qui sint elit anim minim qui aliquip ipsum. Occaecat proident Lorem magna enim voluptate voluptate incididunt velit dolore irure amet in. In pariatur elit voluptate labore duis. Aliquip et laboris pariatur irure duis sunt velit id qui sit est fugiat dolor.\r\n",
  },
  {
    course_name: "Respoinsive Design Course on Angular",
    id: 3,
    author: "Lancaster Mccormick",
    cost: 650,
    tags: ["Angular"],
    discount_from: 1127,
    course_details:
      "Consectetur ullamco laboris pariatur mollit nulla tempor Lorem fugiat mollit ea. Duis eu culpa irure culpa cupidatat amet ipsum nulla irure id ullamco incididunt pariatur. Eiusmod consequat minim ad voluptate ullamco. Officia veniam anim sunt elit non esse ad minim reprehenderit.\r\n",
  },
  {
    course_name: "React Lifecycle methods Intro",
    id: 4,
    author: "Helena Cardenas",
    cost: 382,
    tags: ["React"],
    discount_from: 1272,
    course_details:
      "Amet tempor nisi deserunt aute id quis culpa exercitation nulla deserunt est laboris reprehenderit. Lorem ad magna amet dolore ullamco anim Lorem aliqua laborum cillum est do voluptate. Tempor sint laborum pariatur pariatur qui esse. Laboris fugiat ullamco ad amet sit excepteur. Elit eu commodo sunt magna eu exercitation proident non excepteur voluptate eu in commodo in. Ad ullamco veniam est pariatur voluptate ex duis duis.\r\n",
  },
  {
    course_name: "React with HTML, CSS and JS",
    id: 5,
    author: "April Mathews",
    cost: 434,
    tags: ["React", "Html", "CSS", "Javascript"],
    discount_from: 888,
    course_details:
      "Sit fugiat commodo dolore excepteur duis ex sint laborum. Pariatur adipisicing officia ex ipsum sunt deserunt sint est id. Aliqua Lorem tempor exercitation fugiat minim est laboris consectetur ad officia deserunt. Nostrud ullamco elit magna adipisicing exercitation in veniam et. Qui quis proident dolor excepteur non ipsum minim et sint culpa aliquip eu ipsum minim. Proident labore laborum minim cupidatat voluptate ullamco quis enim cillum. Sint adipisicing esse consequat consequat deserunt ut nostrud pariatur anim quis magna irure dolor.\r\n",
  },
  {
    course_name: "Respoinsive Design Course on React with Typescript",
    id: 6,
    author: "Sally Oneal",
    cost: 680,
    tags: ["React"],
    discount_from: 989,
    course_details:
      "Ad aliqua Lorem nostrud do anim reprehenderit enim exercitation. Cillum minim culpa dolor cupidatat veniam do aliquip nostrud esse nostrud commodo exercitation quis laborum. Cupidatat duis mollit velit mollit culpa anim reprehenderit commodo anim veniam dolore irure in. Amet sunt elit culpa ex ea ullamco.\r\n",
  },
  {
    course_name: "Basics of Angular With Typescript basics",
    id: 7,
    author: "Rollins Mccall",
    cost: 499,
    tags: ["Angular", "Typescript"],
    discount_from: 1162,
    course_details:
      "Amet laborum dolore reprehenderit do aliquip officia in ex dolore. Anim aliqua dolore occaecat do do commodo laborum officia. Ex veniam ullamco ad culpa ipsum ut nisi minim dolor eiusmod consectetur nostrud ea. Minim consectetur sit ipsum in. Anim est mollit duis ullamco commodo consequat.\r\n",
  },
  {
    course_name: "Introduction To Reactive Programming",
    id: 8,
    author: "Lott Luna",
    cost: 584,
    tags: ["React"],
    discount_from: 904,
    course_details:
      "Exercitation officia pariatur ipsum tempor. Officia elit aute est mollit anim laborum ullamco aliqua aliquip nulla irure. Nulla Lorem cupidatat non aliquip do culpa ipsum incididunt occaecat. Occaecat ex occaecat laboris duis nulla exercitation pariatur qui esse reprehenderit. Dolor labore mollit nulla qui aliquip. Lorem aliquip do id cillum et et nostrud sit ut ut elit Lorem exercitation.\r\n",
  },
  {
    course_name: "Async Calls In React using Axios",
    id: 9,
    author: "Nielsen Moses",
    cost: 335,
    tags: ["Axios", "React"],
    discount_from: 764,
    course_details:
      "Excepteur dolor anim commodo consequat proident. Dolore minim culpa irure consectetur anim ut magna ex culpa sint nostrud cillum qui eiusmod. Ut non laborum ea sint incididunt amet in. Eiusmod anim qui dolor est commodo elit elit. Anim proident fugiat laboris exercitation. Amet tempor consequat do proident anim cupidatat. Et aliquip sint sint duis pariatur eu eiusmod nisi in culpa nostrud irure amet in.\r\n",
  },
  {
    course_name: "React Basics: Redux",
    id: 10,
    author: "Oneal Poole",
    cost: 622,
    tags: ["React", "Redux"],
    discount_from: 1262,
    course_details:
      "Anim pariatur in nisi pariatur ut eiusmod incididunt proident deserunt velit enim esse amet eiusmod. Culpa sint adipisicing deserunt voluptate ut sint dolore amet laborum ipsum magna et incididunt. Fugiat pariatur aliquip ullamco sunt aliquip consequat tempor sint id aliquip eu magna. Enim duis aliquip nisi eu do elit commodo. Elit cillum nulla minim ut esse enim.\r\n",
  },
  {
    course_name: "Working with class components in React",
    id: 11,
    author: "Fields Tate",
    cost: 476,
    tags: ["React"],
    discount_from: 880,
    course_details:
      "Aliquip velit consectetur anim ad. Ex irure ut et aute in Lorem. Tempor aliqua dolore culpa aute reprehenderit eiusmod eiusmod elit.\r\n",
  },
  {
    course_name: "React and Angular Intro, Differences",
    id: 12,
    author: "Kelli Harmon",
    cost: 668,
    tags: ["React", "Angular"],
    discount_from: 1108,
    course_details:
      "Ex eiusmod reprehenderit deserunt sit pariatur sit sit magna. Quis cillum do duis consectetur aute qui veniam occaecat tempor quis ea est. Aliqua sint enim anim laboris pariatur in do. Mollit et ad aliquip amet ipsum adipisicing culpa cillum voluptate ut mollit nulla aliqua veniam. Consequat id do adipisicing quis eu sunt elit velit ut cillum. Sit nostrud est sit ex officia proident irure ad eu aliqua est do non aliqua.\r\n",
  },
  {
    course_name: "React Introduction",
    id: 13,
    author: "Kathryn Bates",
    cost: 306,
    tags: ["React"],
    discount_from: 998,
    course_details:
      "Sint et proident voluptate ad qui in laboris laborum proident dolore irure irure aliqua. Lorem non voluptate consectetur est laboris ut duis officia. Adipisicing officia aliqua nulla tempor ad qui officia quis anim dolore minim anim. Culpa pariatur sit et laborum reprehenderit deserunt est laboris esse sunt sunt. Qui labore ex ipsum eu voluptate dolor occaecat aliqua adipisicing ipsum consectetur.\r\n",
  },
  {
    course_name: "React for Dummies",
    id: 14,
    author: "Rene Frazier",
    cost: 510,
    tags: ["React"],
    discount_from: 916,
    course_details:
      "Proident exercitation magna ipsum ipsum Lorem ad nostrud ad non in proident ea. Ex quis dolore minim eu culpa laborum consectetur. Nulla Lorem sint fugiat anim officia veniam laboris. Non labore elit et ullamco eiusmod consequat voluptate tempor esse mollit in. Commodo incididunt in cillum et ullamco magna laborum est excepteur dolore. Commodo consequat qui cupidatat sint aliqua.\r\n",
  },
  {
    course_name: "ES6 for React",
    id: 15,
    author: "Farmer Long",
    cost: 537,
    tags: ["ES6", "Javascript"],
    discount_from: 702,
    course_details:
      "Ipsum commodo tempor minim laboris elit sint. Reprehenderit amet nisi eiusmod consequat pariatur occaecat ad quis. Ipsum eiusmod duis non ex duis reprehenderit incididunt officia consequat ad occaecat. Proident nisi ad cillum esse voluptate fugiat dolore exercitation excepteur officia. Quis sit minim esse do sit dolore elit cillum occaecat duis. Minim minim ut duis proident commodo culpa in ex cupidatat incididunt consectetur.\r\n",
  },
];


module.exports = coursesList