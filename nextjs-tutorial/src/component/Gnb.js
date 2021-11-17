import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";


export default function Gnb() {
    const router = useRouter();
    let activeItem;
    if(router.pathname === "/") {
      activeItem= "home";
    }else if(router.pathname === "/about") {
      activeItem= "about";
    }

    function goLink(e, data) {
      if(data.name === 'home') {
          router.push('/')
      }else if (data.name === 'about') {
          router.push('/about')
      }
    }
    return (
        <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={goLink}
        />
        <Menu.Item 
          name='about'
          active={activeItem === 'about'}
          onClick={goLink}
        />
        {/* <Menu.Item 
          name='contact Us'
          active={activeItem === 'contact'}
          onClick={()=> {
            router.push("/contact")
          }}
        /> */}
      </Menu>
    )
}

// location.href을 안쓰고  nextLink 나 router.push 를 쓰는 이유
// a 태그나 로케이션으로 보내면 페이지가 새로 고침 되면서 다시 랜더링이 되며 이동하게 된다
// 요청이 늘어나 spa의 장점이 사라지게 된다. // 정보를 불러드리는데 다시 시간이 걸려 부드러운 이동이 불가능해진다.

