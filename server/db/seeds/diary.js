exports.seed = (knex) => {
  return knex('diary')
    .del()
    .then(() => {
      return knex('diary').insert([
        {
          id: 1,
          date: '2023-04-02',
          emotion: 'calm',
          roadblocks:
            "I'm still struggling with Redux, so that's my biggest roadblock",
          successes:
            'I managed to submit almost all my assessments today. This is my last one that I am able to do at the moment',
          tomorrow_plan:
            'I will try to go over some Redux tonight so that I am refreshed for projects tomorrow',
        },
        {
          id: 2,
          date: '2023-04-02',
          emotion: 'calm',
          roadblocks:
            "I'm still struggling with Redux, so that's my biggest roadblock",
          successes:
            'I managed to submit almost all my assessments today. This is my last one that I am able to do at the moment',
          tomorrow_plan:
            'I will try to go over some Redux tonight so that I am refreshed for projects tomorrow',
        },
      ])
    })
}
