import { renderHook, act } from '@testing-library/react-hooks';
import { User } from './model';
import { useUser } from './user.hooks';

describe('useUser specs', () => {
  it('should return user with initial values and setUser method when it calls it', async () => {
    // Arrange
    const initialUser: User = {
      name: 'John',
      surname: 'Doe',
    };

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useUser(initialUser)
    );

    // Assert
    expect(result.current.user).toEqual(initialUser);
    expect(result.current.setUser).toEqual(expect.any(Function));

    await waitForNextUpdate();
    expect(result.current.user).toEqual({
      name: 'Jane',
      surname: 'Smith',
    });
  });

  it('should return user with initial values and setUser method when it calls it', async () => {
    // Arrange
    const initialUser: User = {
      name: 'John',
      surname: 'Doe',
    };

    // Act
    const { result, waitForNextUpdate } = renderHook(() => useUser(initialUser));

    await waitForNextUpdate();

    act(() => {
      result.current.setUser({
        name: 'updated name',
        surname: 'updated surname',
      });
    });

    // Assert
    expect(result.current.user).toEqual({
      name: 'updated name',
      surname: 'updated surname',
    });
  });
});
