import React from 'react';

import './sidebar.css';

export interface SidebarItem {
  /** Unique id for the item */
  id: string;
  /** Visible label */
  label: string;
  /** Optional subtitle */
  description?: string;
}

export interface SidebarProps {
  /** Sidebar title */
  title?: string;
  /** Items to render */
  items: SidebarItem[];
  /** Active item id */
  activeItemId?: string;
  /** Compact mode */
  collapsed?: boolean;
  /** Item click handler */
  onSelect?: (id: string) => void;
}

/** Sidebar navigation component */
export const Sidebar = ({
  title = 'Workspace',
  items,
  activeItemId,
  collapsed = false,
  onSelect,
}: SidebarProps) => {
  return (
    <aside className={['storybook-sidebar', collapsed ? 'storybook-sidebar--collapsed' : ''].join(' ')}>
      <div className="storybook-sidebar__header">
        <div className="storybook-sidebar__logo">SB</div>
        {!collapsed && <h2 className="storybook-sidebar__title">{title}</h2>}
      </div>

      <nav className="storybook-sidebar__nav" aria-label="Sidebar">
        {items.map((item) => {
          const isActive = item.id === activeItemId;
          return (
            <button
              key={item.id}
              type="button"
              className={[
                'storybook-sidebar__item',
                isActive ? 'storybook-sidebar__item--active' : '',
              ].join(' ')}
              onClick={() => onSelect?.(item.id)}
            >
              <span className="storybook-sidebar__item-label">{item.label}</span>
              {!collapsed && item.description ? (
                <span className="storybook-sidebar__item-description">{item.description}</span>
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="storybook-sidebar__footer">
        <div className="storybook-sidebar__status" />
        {!collapsed && <span className="storybook-sidebar__footnote">Synced</span>}
      </div>
    </aside>
  );
};
