import React from 'react'
import '../components/Home.css'
import Algorithms from '../components/Algorithms'

class Home extends React.Component {
  state = {
    categories: []
  }

  getCategory() {
    const categories = [
      {
        id: 1, 
        category: "힙(Heap)", 
        numberOfProblem: 40, 
        detail: "힙은 특정한 규칙을 가지는 트리로, 힙을 이용해서 우선순위 큐를 구현할 수 있습니다."
      },
      {
        id: 2, 
        category: "탐욕법", 
        numberOfProblem: 50, 
        detail: "부분적인 최적해가 전체적인 최적해가 되는 마법!"
      },
      {
        id: 3, 
        category: "탐색", 
        numberOfProblem: 40, 
        detail: "LIFO, FIFO, push & pop! 스택과 큐를 이용해서 문제를 풀어보세요."
      },
      {id: 4, category: "해시", numberOfProblem: 30, detail: "해시는 Key-value쌍으로 데이터를 저장하는 자료구조입니다."},
      {id: 5, category: "동적 계획법", numberOfProblem: 20, detail: "불필요한 계산을 줄이고, 효율적으로 최적해를 찾아야만 풀리는 문제들입니다."},
      {
        id: 6, 
        category: "정렬", 
        numberOfProblem: 20, 
        detail: "정렬을 이용해서 문제를 효율적으로 풀어보세요."
      }
    ]
    this.setState({ categories })
  }

  componentDidMount() {
    this.getCategory()
  }

  render() {
    const { categories } = this.state
    return (
      <div className="App">
        <header className="App__header">
          <h1 className="header__title">AlgoHub</h1>
          <nav className="navbar">
            <ul className="navbar__container">
              <li className="navbar__item"><a href="#!" alt="a">알고리즘</a></li>
              <li className="navbar__item"><a href="#!" alt="b">멘토/멘티</a></li>
              <li className="navbar__item"><a href="#!" alt="b">랭킹</a></li>
              <li className="navbar__item"><a href="#!" alt="c">게시판</a></li>
            </ul>
          </nav>
          <div className="profile">
            
          </div>

        </header>
        <main>
          <div className="category__container">
            {categories.map(category =>
              <Algorithms
                key={category.id}
                id={category.id}
                category={category.category}
                detail={category.detail}
                numberOfProblem={category.numberOfProblem}
                >
              </Algorithms>)}
          </div>
        </main>
        <footer>
          <div>
            11
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
