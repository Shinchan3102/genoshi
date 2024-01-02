'use client'

import { Card, LineChart, Title } from "@tremor/react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { MdDelete } from 'react-icons/md';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const chartdata = [
    {
        year: 1970,
        "Export Growth Rate": 2.04,
        "Import Growth Rate": 1.53,
    },
    {
        year: 1971,
        "Export Growth Rate": 1.96,
        "Import Growth Rate": 1.58,
    },
    {
        year: 1973,
        "Export Growth Rate": 1.93,
        "Import Growth Rate": 1.61,
    },
    {
        year: 1974,
        "Export Growth Rate": 1.88,
        "Import Growth Rate": 1.67,
    },
    {
        year: 1975,
        "Export Growth Rate": 1.79,
        "Import Growth Rate": 1.64,
    },
    {
        year: 1976,
        "Export Growth Rate": 1.77,
        "Import Growth Rate": 1.62,
    },
    {
        year: 1982,
        "Export Growth Rate": 1.84,
        "Import Growth Rate": 1.73,
    },
    {
        year: 1983,
        "Export Growth Rate": 1.77,
        "Import Growth Rate": 1.73,
    },
    {
        year: 1984,
        "Export Growth Rate": 1.78,
        "Import Growth Rate": 1.78,
    },
    {
        year: 1985,
        "Export Growth Rate": 1.78,
        "Import Growth Rate": 1.81,
    },
    {
        year: 1986,
        "Export Growth Rate": 1.82,
        "Import Growth Rate": 1.89,
    },
    {
        year: 1987,
        "Export Growth Rate": 1.82,
        "Import Growth Rate": 1.91,
    },
    {
        year: 1988,
        "Export Growth Rate": 1.77,
        "Import Growth Rate": 1.94,
    },
    {
        year: 1989,
        "Export Growth Rate": 1.76,
        "Import Growth Rate": 1.94,
    },
    {
        year: 1990,
        "Export Growth Rate": 1.75,
        "Import Growth Rate": 1.97,
    },
    {
        year: 1991,
        "Export Growth Rate": 1.62,
        "Import Growth Rate": 1.99,
    },
    {
        year: 1992,
        "Export Growth Rate": 1.56,
        "Import Growth Rate": 2.12,
    },
    {
        year: 1993,
        "Export Growth Rate": 1.5,
        "Import Growth Rate": 2.13,
    },
    {
        year: 1994,
        "Export Growth Rate": 1.46,
        "Import Growth Rate": 2.15,
    },
    {
        year: 1998,
        "Export Growth Rate": 1.34,
        "Import Growth Rate": 2.07,
    },
    {
        year: 1999,
        "Export Growth Rate": 1.32,
        "Import Growth Rate": 2.05,
    },
    {
        year: 2000,
        "Export Growth Rate": 1.33,
        "Import Growth Rate": 2.07,
    },
    {
        year: 2001,
        "Export Growth Rate": 1.31,
        "Import Growth Rate": 2.08,
    },
    {
        year: 2007,
        "Export Growth Rate": 1.27,
        "Import Growth Rate": 2.34,
    },
    {
        year: 2008,
        "Export Growth Rate": 1.26,
        "Import Growth Rate": 2.36,
    },
    {
        year: 2009,
        "Export Growth Rate": 1.26,
        "Import Growth Rate": 2.36,
    },
    {
        year: 2013,
        "Export Growth Rate": 1.22,
        "Import Growth Rate": 2.3,
    },
    {
        year: 2014,
        "Export Growth Rate": 1.2,
        "Import Growth Rate": 2.35,
    },
    {
        year: 2015,
        "Export Growth Rate": 1.17,
        "Import Growth Rate": 2.39,
    },
    {
        year: 2016,
        "Export Growth Rate": 1.16,
        "Import Growth Rate": 2.41,
    },
    {
        year: 2017,
        "Export Growth Rate": 1.13,
        "Import Growth Rate": 2.44,
    },
    {
        year: 2018,
        "Export Growth Rate": 1.07,
        "Import Growth Rate": 2.45,
    },
    {
        year: 2019,
        "Export Growth Rate": 1.03,
        "Import Growth Rate": 2.47,
    },
    {
        year: 2020,
        "Export Growth Rate": 0.92,
        "Import Growth Rate": 2.48,
    },
    {
        year: 2021,
        "Export Growth Rate": 0.82,
        "Import Growth Rate": 2.51,
    },
];

const LineGraph = ({ title, id, isLiked, handleLike, handleDelete }: { title: string, id: number, isLiked: boolean, handleLike: (id: number) => void, handleDelete: (id: number) => void }) => {
    return (
        <div className="w-full relative">
            <Card>
                <Title>{title}</Title>
                <LineChart
                    className="h-72 mt-4"
                    data={chartdata}
                    index="date"
                    categories={["Export Growth Rate"]}
                    colors={["blue"]}
                    yAxisWidth={30}
                    customTooltip={customTooltip}
                />
            </Card>
            <div className="absolute flex items-center gap-4 top-5 right-5 text-lg cursor-pointer" onClick={() => handleLike(id)}>
                {
                    isLiked ?
                        <GoHeartFill className='text-primary' />
                        :
                        <GoHeart className='text-primary' />
                }
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="bg-transparent text-muted-foreground hover:text-red-500 hover:bg-transparent p-0 text-xl">
                            <MdDelete />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your graph from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={()=>handleDelete(id)}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    )
}

const customTooltip = ({ payload, active }: { payload: any, active: any }) => {
    if (!active || !payload) return null;
    return (
        <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
            {payload.map((category: any, idx: any) => (
                <div key={idx} className="flex flex-1 space-x-2.5">
                    <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
                    <div className="space-y-1">
                        <p className="text-tremor-content">{category.dataKey}</p>
                        <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LineGraph
