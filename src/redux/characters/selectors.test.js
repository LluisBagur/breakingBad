import { selectInfoCharById, selectAllCharInfo, selectIsLoading } from './selectors';

describe('selectInfoCharById', () => {
    const state = 
        {
            data: {
              characters: [
                {
                  char_id: 1,
                  name: 'Walter White',
                  birthday: '09-07-1958',
                  occupation: [
                    'High School Chemistry Teacher',
                    'Meth King Pin'
                  ],
                  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
                  status: 'Presumed dead',
                  nickname: 'Heisenberg',
                  appearance: [
                    1,
                    2,
                    3,
                    4,
                    5
                  ],
                  portrayed: 'Bryan Cranston',
                  category: 'Breaking Bad',
                  better_call_saul_appearance: []
                },
                {
                  char_id: 2,
                  name: 'Jesse Pinkman',
                  birthday: '09-24-1984',
                  occupation: [
                    'Meth Dealer'
                  ],
                  img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
                  status: 'Alive',
                  nickname: 'Cap n\' Cook',
                  appearance: [
                    1,
                    2,
                    3,
                    4,
                    5
                  ],
                  portrayed: 'Aaron Paul',
                  category: 'Breaking Bad',
                  better_call_saul_appearance: []
                },
              ],
              loading: false,
              error: null
            },
            quote: {
              quote: [],
              loading: false,
              error: null
            }
          };

  it('should return a character info', () => {
    const character = selectInfoCharById(state, 1);
    expect(character.name).toEqual('Walter White');
  });
  it('should return all characters from state', () => {
    const characters = selectAllCharInfo(state);
    expect(characters.length).toEqual(2);
  });
  it('should return a loading character state', () => {
    const loading = selectIsLoading(state);
    expect(loading).toBe(false);
  });
});
