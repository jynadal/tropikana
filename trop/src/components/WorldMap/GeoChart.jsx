import React, {useRef, useEffect, useState } from 'react';
import { select, geoPath } from 'd3';
import useResizeObserver from './useResizeOserver';

function GeoChart ({ data, property }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);

    // Will be called initially and on every data chenge
    useEffect(() => {
        const svg = select(svgRef.current);

        //use resized dimensions
        //but fall back to getBoundingClientRect, if no dimensions yet.
        const { width, height } = 
        dimensions || wrapperRef.current.getBoundingClientRect();
    }, [data, dimensions, property]);

    return (
        <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
            <svg ref={svgRef}></svg>
        </div>
    );
}

export default GeoChart;

