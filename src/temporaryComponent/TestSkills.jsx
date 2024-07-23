const data = [
  {
    name: "Siddhi Mehta",
    img: "/favicon.png",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugiat eius debitis quasi veniam saepe enim ipsum excepturi voluptatum molestias ea consectetur itaque voluptas numquam eum placeat tenetur odio rem, ullam perspiciatis.",
  },
  {
    name: "Siddhi Mehta",
    img: "/favicon.png",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugiat eius debitis quasi veniam saepe enim ipsum excepturi voluptatum molestias ea consectetur itaque voluptas numquam eum placeat tenetur odio rem, ullam perspiciatis.",
  },
  {
    name: "Siddhi Mehta",
    img: "/favicon.png",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente fugiat eius debitis quasi veniam saepe enim ipsum excepturi voluptatum molestias ea consectetur itaque voluptas numquam eum placeat tenetur odio rem, ullam perspiciatis.",
  },
];

const TestSkills = () => {
  return <div className="w-3/4  m-auto">
    <div className="mt-20">
        {data.map((d)=>{
            <div>
                <div>
                    <img src={d.img} alt="" />
                </div>
                <div>
                    <p>{d.name}</p>
                    <p>{d.review}</p>
                    <button>Read More</button>
                </div>

            </div>
        })}
    </div>
  </div>
};

export default TestSkills;
