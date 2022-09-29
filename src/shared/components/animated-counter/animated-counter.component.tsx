import { animate } from 'framer-motion';
import React, { memo, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    from: number;
    to: number;
    duration: number;
}

const AnimatedCounter = ({ from, to, duration }: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const controls = animate(from, to, {
            duration,
            onUpdate(value) {
                if (ref.current) ref.current.textContent = `${value.toFixed(0)}`;
            },
        });
        return () => controls.stop();
    }, [from, to, duration]);

    return <span ref={ref} />;
};

export default memo(AnimatedCounter);
