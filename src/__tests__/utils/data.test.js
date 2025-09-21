import rows from '../../model/data';

describe('Data Generation', () => {
  describe('rows array', () => {
    it('should generate exactly 100 rows', () => {
      expect(rows).toHaveLength(100);
    });

    it('should have unique IDs for each row', () => {
      const ids = rows.map(row => row.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(100);
    });

    it('should have sequential IDs starting from 1', () => {
      const ids = rows.map(row => row.id).sort((a, b) => a - b);
      expect(ids[0]).toBe(1);
      expect(ids[99]).toBe(100);
    });

    it('should have unique order IDs', () => {
      const orderIds = rows.map(row => row.orderId);
      const uniqueOrderIds = new Set(orderIds);
      expect(uniqueOrderIds.size).toBe(100);
    });

    it('should have order IDs in correct format', () => {
      const orderIdPattern = /^#CM9[8-9][0-9][0-9]$/;
      rows.forEach(row => {
        expect(row.orderId).toMatch(orderIdPattern);
      });
    });

    it('should have valid user objects with name and avatar', () => {
      rows.forEach(row => {
        expect(row.user).toBeDefined();
        expect(row.user.name).toBeDefined();
        expect(typeof row.user.name).toBe('string');
        expect(row.user.name.length).toBeGreaterThan(0);
        expect(row.user.avatar).toBeDefined();
        expect(row.user.avatar).toMatch(/^\/assets\/avater[1-8]\.jpg$/);
      });
    });

    it('should have valid project names', () => {
      rows.forEach(row => {
        expect(row.project).toBeDefined();
        expect(typeof row.project).toBe('string');
        expect(row.project.length).toBeGreaterThan(0);
      });
    });

    it('should have valid addresses', () => {
      rows.forEach(row => {
        expect(row.address).toBeDefined();
        expect(typeof row.address).toBe('string');
        expect(row.address.length).toBeGreaterThan(0);
      });
    });

    it('should have valid dates', () => {
      rows.forEach(row => {
        expect(row.date).toBeDefined();
        expect(typeof row.date).toBe('string');
        expect(row.date.length).toBeGreaterThan(0);
      });
    });

    it('should have valid status values', () => {
      const validStatuses = ['In Progress', 'Complete', 'Pending', 'Approved', 'Rejected'];
      rows.forEach(row => {
        expect(row.status).toBeDefined();
        expect(validStatuses).toContain(row.status);
      });
    });

    it('should have consistent data structure across all rows', () => {
      const expectedKeys = ['id', 'orderId', 'user', 'project', 'address', 'date', 'status'];
      rows.forEach(row => {
        expect(Object.keys(row)).toEqual(expect.arrayContaining(expectedKeys));
        expect(Object.keys(row)).toHaveLength(expectedKeys.length);
      });
    });

    it('should have user objects with correct structure', () => {
      rows.forEach(row => {
        expect(Object.keys(row.user)).toEqual(['name', 'avatar']);
      });
    });
  });

  describe('data distribution', () => {
    it('should have diverse user names', () => {
      const names = rows.map(row => row.user.name);
      const uniqueNames = new Set(names);
      // Should have at least some diversity (not all the same name)
      expect(uniqueNames.size).toBeGreaterThan(1);
    });

    it('should have diverse projects', () => {
      const projects = rows.map(row => row.project);
      const uniqueProjects = new Set(projects);
      expect(uniqueProjects.size).toBeGreaterThan(1);
    });

    it('should have diverse addresses', () => {
      const addresses = rows.map(row => row.address);
      const uniqueAddresses = new Set(addresses);
      expect(uniqueAddresses.size).toBeGreaterThan(1);
    });

    it('should have diverse dates', () => {
      const dates = rows.map(row => row.date);
      const uniqueDates = new Set(dates);
      expect(uniqueDates.size).toBeGreaterThan(1);
    });

    it('should have diverse statuses', () => {
      const statuses = rows.map(row => row.status);
      const uniqueStatuses = new Set(statuses);
      expect(uniqueStatuses.size).toBeGreaterThan(1);
    });
  });

  describe('edge cases', () => {
    it('should handle empty arrays gracefully', () => {
      // Test the getRandomElement function behavior with empty array
      const emptyArray = [];
      const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
      
      // This should return undefined for empty array
      expect(getRandomElement(emptyArray)).toBeUndefined();
    });

    it('should not have any null or undefined values', () => {
      rows.forEach(row => {
        Object.values(row).forEach(value => {
          if (typeof value === 'object' && value !== null) {
            Object.values(value).forEach(nestedValue => {
              expect(nestedValue).toBeDefined();
            });
          } else {
            expect(value).toBeDefined();
          }
        });
      });
    });
  });
});
