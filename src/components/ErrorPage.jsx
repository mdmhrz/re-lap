'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-react';

const ErrorPage = ({
    statusCode = 500,
    title = "Something went wrong",
    message = "An unexpected error occurred. Please try again later.",
    showRefresh = true,
    showHome = true,
    showBack = false,
    onRefresh,
    onHome,
    onBack
}) => {
    const [currentTime, setCurrentTime] = useState('');

    // Set timestamp only on client side to prevent hydration mismatch
    useEffect(() => {
        setCurrentTime(new Date().toLocaleString());
    }, []);
    const handleRefresh = () => {
        if (onRefresh) {
            onRefresh();
        } else {
            window.location.reload();
        }
    };

    const handleHome = () => {
        if (onHome) {
            onHome();
        } else {
            window.location.href = '/';
        }
    };

    const handleBack = () => {
        if (onBack) {
            onBack();
        } else {
            window.history.back();
        }
    };

    const getErrorDetails = (code) => {
        switch (code) {
            case 404:
                return {
                    title: "Page Not Found",
                    message: "The page you're looking for doesn't exist or has been moved.",
                    icon: AlertTriangle
                };
            case 403:
                return {
                    title: "Access Forbidden",
                    message: "You don't have permission to access this resource.",
                    icon: AlertTriangle
                };
            case 401:
                return {
                    title: "Unauthorized",
                    message: "Please log in to access this page.",
                    icon: AlertTriangle
                };
            case 500:
                return {
                    title: "Internal Server Error",
                    message: "Something went wrong on our end. We're working to fix it.",
                    icon: AlertTriangle
                };
            default:
                return {
                    title: title,
                    message: message,
                    icon: AlertTriangle
                };
        }
    };

    const errorDetails = getErrorDetails(statusCode);
    const IconComponent = errorDetails.icon;

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Card className="border-border shadow-lg">
                    <CardContent className="pt-8 pb-8 text-center space-y-6">
                        {/* Error Icon */}
                        <div className="flex justify-center">
                            <div className="rounded-full bg-destructive/10 p-4">
                                <IconComponent className="h-12 w-12 text-destructive" />
                            </div>
                        </div>

                        {/* Status Code */}
                        <div className="space-y-2">
                            <h1 className="text-6xl font-bold text-foreground/80">
                                {statusCode}
                            </h1>
                            <h2 className="text-xl font-semibold text-foreground">
                                {errorDetails.title}
                            </h2>
                        </div>

                        {/* Error Message */}
                        <p className="text-muted-foreground leading-relaxed px-2">
                            {errorDetails.message}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3 pt-4">
                            {showRefresh && (
                                <Button
                                    onClick={handleRefresh}
                                    className="w-full"
                                    size="lg"
                                >
                                    <RefreshCw className="mr-2 h-4 w-4" />
                                    Try Again
                                </Button>
                            )}

                            <div className="flex gap-2">
                                {showBack && (
                                    <Button
                                        variant="outline"
                                        onClick={handleBack}
                                        className="flex-1"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Go Back
                                    </Button>
                                )}

                                {showHome && (
                                    <Button
                                        variant="outline"
                                        onClick={handleHome}
                                        className={showBack ? "flex-1" : "w-full"}
                                    >
                                        <Home className="mr-2 h-4 w-4" />
                                        Home
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Support Text */}
                        <div className="pt-4 border-t border-border">
                            <p className="text-xs text-muted-foreground">
                                If this problem persists, please{' '}
                                <button
                                    className="underline hover:text-foreground transition-colors"
                                    onClick={() => window.location.href = 'mailto:support@relap.com'}
                                >
                                    contact support
                                </button>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Additional Help */}
                {currentTime && (
                    <div className="mt-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Error occurred at {currentTime}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Pre-configured error components for common use cases
export const NotFoundPage = (props) => (
    <ErrorPage
        statusCode={404}
        showBack={true}
        {...props}
    />
);

export const UnauthorizedPage = (props) => (
    <ErrorPage
        statusCode={401}
        showRefresh={false}
        {...props}
    />
);

export const ForbiddenPage = (props) => (
    <ErrorPage
        statusCode={403}
        showRefresh={false}
        showBack={true}
        {...props}
    />
);

export const ServerErrorPage = (props) => (
    <ErrorPage
        statusCode={500}
        {...props}
    />
);

export default ErrorPage;