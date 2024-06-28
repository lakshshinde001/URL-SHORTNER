import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LinkIcon, LogOut } from 'lucide-react';

const Header = () => {

    const navigate = useNavigate();
    const user = true;
  return (
    <nav className='py-4 flex justify-between items-center ' >
        <Link to='/'>  
            <img src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg' alt='App Logo' className='h-11' />
        </Link>
        <div>
            {
                !user ?  (
                <Button onClick={() => navigate('/auth')} >Login </Button> 
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>LS</AvatarFallback>
                        </Avatar>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Laxman Shinde</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LinkIcon className='mr-2 h-4 w-4' />
                                <span>My Links</span> 
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400" >
                                <LogOut className='mr-2 h-4 w-4' />
                                <span> Log-Out </span> 
                            </DropdownMenuItem>
                        
                        </DropdownMenuContent>
                        </DropdownMenu>
                )
            }
        </div>
    </nav>
  )
}

export default Header