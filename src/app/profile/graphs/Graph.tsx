'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LineGraph from '@/components/LineGraph'

type GraphOption = {
  title: string
  isLiked: boolean
  id: number
}

const Graph = () => {

  const [data, setData] = useState<GraphOption[]>([
    {
      id: 1,
      title: 'Graph1',
      isLiked: false,
    }
  ]);

  const [title, setTitle] = useState<string>('Title');
  const [id, setId] = useState<number>(1)

  const handleAddGraph = (e: any) => {
    e.preventDefault();
    setData((prev) => [
      ...prev,
      {
        title,
        isLiked: false,
        id: id + 1,
      }
    ]
    );

    setTitle('Title');
    setId(id + 1);
  }

  const handleLike = (id: number) => {
    setData((prev) => prev.map((item) => item.id === id ? { ...item, isLiked: !item.isLiked } : item))
  }

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <div className='flex flex-col gap-8 pr-4 md:pr-6'>
      <div className='flex justify-between items-center gap-6'>
        <h1 className='text-2xl font-medium'>
          My Graphs
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className={clsx(buttonVariants({ variant: 'outline' }), 'rounded text-muted-foreground')}>
              Add new
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Add a new graph
              </DialogTitle>
              <DialogDescription>
                Create a new graph to get the best visualisation
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className='rounded' onClick={handleAddGraph}>Add Graph</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>

      <div className=''>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
          {
            data.map((item) => (
              <LineGraph
                key={item.title}
                title={item.title}
                id={item.id}
                isLiked={item.isLiked}
                handleLike={handleLike}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Graph