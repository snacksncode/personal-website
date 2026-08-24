'use client';

import {
  Background,
  BackgroundVariant,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
} from '@xyflow/react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

type FlowData = { label: ReactNode };

function nodeLabel(kicker: string, title: string, detail?: string) {
  return (
    <div className="flow-node-content">
      <span>{kicker}</span>
      <strong>{title}</strong>
      {detail ? <small>{detail}</small> : null}
    </div>
  );
}

const desktopNodes: Node<FlowData>[] = [
  {
    id: 'signals',
    position: { x: 0, y: 155 },
    data: { label: nodeLabel('Dziś', 'E-mail + Excel', 'ręczne ustalenia') },
    className: 'offer-flow-node signals-node',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'sprint',
    position: { x: 220, y: 155 },
    data: { label: nodeLabel('7 dni', 'Diagnoza', '+ cięcie zakresu') },
    className: 'offer-flow-node sprint-node',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'decision',
    position: { x: 445, y: 155 },
    data: { label: nodeLabel('Decyzja', 'Czy software ma sens?') },
    className: 'offer-flow-node decision-node',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'no-build',
    position: { x: 690, y: 35 },
    data: { label: nodeLabel('Bez budowania', 'Prostszy proces', 'lub gotowe narzędzie') },
    className: 'offer-flow-node no-build-node',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: 'build',
    position: { x: 690, y: 275 },
    data: { label: nodeLabel('Następny krok', 'Plan + budżet', 'opcjonalnie: moje wdrożenie') },
    className: 'offer-flow-node build-node',
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
];

const mobileNodes: Node<FlowData>[] = [
  { ...desktopNodes[0], position: { x: 84, y: 0 } },
  { ...desktopNodes[1], position: { x: 84, y: 145 } },
  { ...desktopNodes[2], position: { x: 84, y: 290 } },
  { ...desktopNodes[3], position: { x: 0, y: 485 } },
  { ...desktopNodes[4], position: { x: 168, y: 485 } },
].map((node) => ({
  ...node,
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
}));

const desktopEdges: Edge[] = [
  { id: 'signals-sprint', source: 'signals', target: 'sprint', animated: true },
  { id: 'sprint-decision', source: 'sprint', target: 'decision', animated: true },
  { id: 'decision-no', source: 'decision', target: 'no-build', label: 'NIE', type: 'smoothstep' },
  { id: 'decision-yes', source: 'decision', target: 'build', label: 'TAK', type: 'smoothstep' },
];

const mobileEdges: Edge[] = desktopEdges.map((edge) => ({ ...edge, type: 'smoothstep' }));

const edgeDefaults = {
  markerEnd: { type: MarkerType.ArrowClosed, width: 18, height: 18, color: '#cafa75' },
  style: { stroke: '#cafa75', strokeWidth: 2.5 },
  labelStyle: { fill: '#fffdf8', fontSize: 10, fontWeight: 700 },
  labelBgStyle: { fill: '#14231d', fillOpacity: 0.95 },
  labelBgPadding: [5, 4] as [number, number],
  labelBgBorderRadius: 0,
};

export function DecisionFlow() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => setIsMobile(entry.contentRect.width < 500));
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const nodes = useMemo(() => (isMobile ? mobileNodes : desktopNodes), [isMobile]);
  const edges = isMobile ? mobileEdges : desktopEdges;

  return (
    <div
      className="decision-flow"
      aria-label="Proces podejmowania decyzji o wdrożeniu"
      ref={containerRef}
    >
      <ReactFlow
        key={isMobile ? 'mobile' : 'desktop'}
        nodes={nodes}
        edges={edges}
        defaultEdgeOptions={edgeDefaults}
        colorMode="dark"
        fitView
        fitViewOptions={{ padding: isMobile ? 0.08 : 0.12 }}
        minZoom={0.1}
        maxZoom={1.5}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        preventScrolling={false}
        aria-label="E-mail i Excel trafiają do diagnozy. Jeżeli software nie ma sensu, rekomenduję prostszy proces. Jeżeli ma sens, powstaje plan, budżet i opcjonalne wdrożenie."
      >
        <Background
          color="rgba(255,253,248,.22)"
          gap={24}
          size={1}
          variant={BackgroundVariant.Lines}
        />
      </ReactFlow>
      <p className="flow-caption">Jedna diagnoza. Dwie uczciwe odpowiedzi.</p>
    </div>
  );
}
