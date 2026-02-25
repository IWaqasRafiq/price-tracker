"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const Input = ({ user }) => {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url,
                    user,
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <form onSubmit={handleSubmit} className='w-full max-w-2xl mx-auto'>
            <div className='flex flex-col sm:flex-row gap-2 '>
                <input type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter product URL" />
                <Button className='bg-orange-500 hover:bg-orange-600 h-12 px-8'
                    type='submit'
                    disabled={isLoading}
                    size='lg'
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                            <span className="ml-2">Tracking...</span>
                        </>
                    ) : "Track Price"}
                </Button>
            </div>
        </form>
    )
}

export default Input